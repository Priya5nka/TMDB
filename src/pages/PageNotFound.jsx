import { Link } from "react-router-dom"
import pagenotfound from "../assets/images/pagenotfound.png"
import { Button } from "../components"
import useTitle from "../hooks/useTitle"

const PageNotFound = () => {

  useTitle("404 - Page Not Found");

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404 - Page Not Found
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={pagenotfound} alt="Page Not Found" />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link to='/'>
            <Button text="Back to TMDB" />
          </Link>
        </div>


      </section>
    </main>

  )
}

export { PageNotFound }