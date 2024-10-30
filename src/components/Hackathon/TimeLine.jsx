import { useState, useEffect, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

function TimeLine() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold for visibility trigger
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <div className='bg-black'>
      <h1 className='text-6xl text-white md:px-28 py-20 px-5'>TimeLine</h1>
      <VerticalTimeline ref={timelineRef} className={isVisible ? 'animate' : ''}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
    date="Oct 15, 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Registration Opens</h3>
    <p>Participants can register early to reserve a spot for the hackathon.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Oct 20, 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Team Formation & Idea Submission</h3>
    <p>Teams finalize members and submit a brief outline of their project ideas.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Nov 1, 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Hackathon Kick-Off</h3>
    <p>Opening ceremony with an overview of rules, judging criteria, and available resources.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Nov 2, 2024"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Workshops & Mentorship</h3>
    <p>Optional skill-building sessions with experts to refine team ideas and strategies.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Nov 3, 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Midway Check-In</h3>
    <p>Teams share progress and receive feedback to help guide further development.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Nov 4, 2024, 5:00 PM"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Project Submission Deadline</h3>
    <p>All completed projects and required documentation must be submitted by this time.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Nov 5, 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Judging & Presentation</h3>
    <p>Teams present their projects to the judging panel and answer questions.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Nov 5, 2024, 8:00 PM"
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title">Closing Ceremony & Awards</h3>
    <p>Winners are announced, and the event concludes with closing remarks.</p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  );
}

export default TimeLine;