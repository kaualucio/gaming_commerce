import type { NextPage } from 'next'
import Filter from '../components/Filter'
import ListGames from '../components/ListGames'
import SearchSection from '../components/SearchSection'

const Home: NextPage = () => {
  return (
    <div className="w-full p-5 md:px-7 lg:px-10">
      <SearchSection />
      <div className="sm:w-full w-2/4 mx-auto p-5">
        <Filter />
        <ListGames />
      </div>
    </div>
  )
}

export default Home
