import ButtonLogin from "@/components/ButtonLogin";


export default function Home() {

  const isLoggedIn = true;
  const name = "Jay"

  const pricingFeaturesList = ["Collect customer feeedback", "Unlimited baords", "Admin dashboard", "24/7 support",]


  return (
   <main>

    {/* header */}
    <section className="bg-base-200 ">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2 ">
      <div className="font-bold">CodeFastSaas</div>
        <div className="space-x-4 max-md:hidden">
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">FAQ</a>
        </div>
        <div>
          <ButtonLogin isLoggedIn={isLoggedIn} name ={name}/>
        </div>
        </div>
    </section>

    {/* hero */}
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">Collect customer feedback to build better products</h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritise features and build products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name = {name} />
      </section>

      {/* pricing */}
      <section className="bg-base-200">
      <div className="py-32 px-8 max-w-3xl mx-auto">
        <p className="text-sm uppercase font-medium text-center text-primary mb-4">Pricing</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center ">
          Pricing that adapts to your needs
        </h2>
        <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
          <div className="flex gap-2 items-baseline">
          <div className="text-4xl font-black">£19</div>
          <div className="uppercase text-sm font-medium opacity-60">/month</div>
        </div>

        {/* pricing card */}

        <ul className="space-y-2">
          {
            pricingFeaturesList.map(
              (priceItem) => {
                return <li className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="size-6"
                className="text-green-600 size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {priceItem}</li>

              }
            )
          }
        
        </ul>

        < ButtonLogin isLoggedIn={isLoggedIn} name = {name} 
        extraStyle="w-full"/>
      </div>
      </div>
      </section>
    </main>
  );
}

