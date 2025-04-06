import React, { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGamepad } from 'react-icons/fa';

function Timeline() {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://67f1305ec733555e24ac6980.mockapi.io/timeline')
      .then((res) => res.json())
      .then((data) => {
        // Urutkan jika perlu
        const sorted = data.sort((a, b) => a.year.localeCompare(b.year));
        setTimelineData(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading timeline...</div>;
  }

  return (
    <div className="container py-5">
      <h2 className="text-center text-white mb-5">Timeline Cerita Assassin's Creed</h2>
      <VerticalTimeline lineColor="#888">
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.year}
            contentStyle={{ background: '#1a1a1a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #1a1a1a' }}
            iconStyle={{ background: '#900', color: '#fff' }}
            icon={<FaGamepad />}
          >
            <h4 className="vertical-timeline-element-title">{item.title}</h4>
            <p>{item.summary}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
