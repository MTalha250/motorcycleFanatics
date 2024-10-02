import CounteriesCovered from '@/components/home/CountriesCovered'
import GetInTouch from '@/components/home/GetInTouch'
import HowItWorks from '@/components/home/howItWorks'
import NewsLetter from '@/components/home/NewsLetter'
import SearchHero from '@/components/search-result/hero'

const SearchResultPage = () => {
  return (
    <div>
      <SearchHero/>
      <CounteriesCovered/>
      <HowItWorks/>
      <NewsLetter/>
      <GetInTouch/>
    </div>
  )
}

export default SearchResultPage
