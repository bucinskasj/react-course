import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT4wi_WhwsJF_ncDw_vrAbBXj0q1p2lojNJWZA2X36Htb2KeBXcQKi_lGmDdydtUsT7',
    address: 'Some Address 5, 12345 Some City',
    description: 'This is a first meetup'
  },
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://images.musement.com/cover/0001/37/vilnius-jpg_header-36634.jpeg',
    address: 'Some Address 5, 12345 Some City',
    description: 'This is a first meetup'
  }
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;