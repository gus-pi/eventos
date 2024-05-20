import H1 from '@/components/h1';

type EventspageProps = {
  params: {
    city: string;
  };
};

const EventsPage = ({ params }: EventspageProps) => {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === 'all' && 'All Events'}
        {city !== 'all' &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
    </main>
  );
};

export default EventsPage;
