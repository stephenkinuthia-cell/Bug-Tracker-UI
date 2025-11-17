import story1 from '../../assets/images/story1.webp';
import story2 from '../../assets/images/story2.webp';
import one from '../../assets/images/one.jpeg';
import two from '../../assets/images/two.jpeg';
import three from '../../assets/images/three.avif';
import five from '../../assets/images/five.avif';
import six from '../../assets/images/six.avif';
import seven from '../../assets/images/seven.jpeg'

type Testimonial = {
    id: number;
    name: string;
    role: string;
    image: string;
    content: string;
};

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: 'John kamau',
        role: 'Project Manager',
        image: one,
        content: 'BugTrackr has transformed the way our team manages issues. The intuitive interface and powerful tracking tools make bug management effortless.',
    },
    {
        id: 2,
        name: 'Jane',
        role: 'Software Engineer',
        image: story2,
        content: 'With BugTrackr, I can easily track bugs and deadlines. It has significantly improved my workflow and helped me stay organized.',
    },
    {
        id: 3,
        name: 'Michael mutiso',
        role: 'UI/UX Designer',
        image: two,
        content: 'The clean design and user-friendly experience of BugTrackr make it my go-to tool for reporting and monitoring design-related issues.',
    },
    {
        id: 4,
        name: 'Emily',
        role: 'QA Analyst',
        image: seven,
        content: 'BugTrackr helps me keep track of testing cycles and bug reports efficiently. Highly recommended for any QA team!',
    },
    {
        id: 5,
        name: 'David Omar',
        role: 'DevOps Engineer',
        image: story1,
        content: 'Integrating BugTrackr into our workflow has streamlined our deployment process and improved cross-team communication.',
    },
    {
        id: 6,
        name: 'Sophia Nyamboke',
        role: 'Product Owner',
        image: six,
        content: 'BugTrackr gives me a clear overview of project issues and helps prioritize fixes for the team.',
    },
    {
        id: 7,
        name: 'Chris Brown',
        role: 'Frontend Developer',
        image: three,
        content: 'I love how BugTrackr keeps all bug reports organized and accessible from anywhere.',
    },
    {
        id: 8,
        name: 'Olivia Resian',
        role: 'Backend Developer',
        image: five,
        content: 'BugTrackr’s collaboration features have made working with my team seamless and efficient.',
    },
];
