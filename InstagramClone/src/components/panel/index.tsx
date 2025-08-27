import people from '../../data/people'
import IPerson from '../../schemas/person'
import Button from './button'
import Person from './person'
import profilePic from '../../assets/screenshots/profile.jpg'

const Panel = () => {
  return (
    <section className="w-[22rem] hidden lg:block lg:fixed ml-[30.5rem] space-y-4 pt-4 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden w-16 h-16 cursor-pointer">
            <img
              className="w-full"
              src={profilePic}
              alt="Deepanshu Sharma"
            />
          </div>
          <div>
            <h2 className="font-semibold text-md">deepanshu.sharmaa</h2>
            <h3 className="opacity-50">Deepanshu Sharma</h3>
          </div>
        </div>
        <Button>Switch</Button>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="font-semibold opacity-50">Suggestions For You</h1>
        <Button blacked>See All</Button>
      </div>

      <div className='space-y-4'>
        {people.map((person: IPerson) => (
          <Person key={person.id} person={person}/>
        ))}
      </div>
    </section>
  )
}

export default Panel
