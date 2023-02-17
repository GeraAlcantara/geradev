import MetaPageHelper from '../lib/MetaPageHelper'
import { MetaGracias } from '../data/MetaData'

function thankyou(): JSX.Element {
  return (
    <div>
      <MetaPageHelper {...MetaGracias} />
      {/* render inside main all content */}
      <div className="h-screen flex justify-center items-center ">
        <div className="">
          <h1 className="text-brand-pink-200 uppercase text-center text-3xl font-bold font-Urbanist">
            Thank you!
          </h1>
        </div>
      </div>
    </div>
  )
}

export default thankyou
