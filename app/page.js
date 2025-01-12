import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemo from "@/app/productDemo.jpeg";


export default function Home() {

  const isLoggedIn = true;
  const name = "Jay"

  return (
   <main>

    {/* header */}
    <section className="bg-base-200 ">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-8 py-2 ">
      <div className="font-bold">CodeFastSaas</div>
        <div className="space-x-4 max-md:hidden">
        <a className="link link-hover" href="#pricing">Pricing</a>
        <a className="link link-hover" href="#FAQ">FAQ</a>
        </div>
        <div>
          <ButtonLogin isLoggedIn={isLoggedIn} name ={name}/>
        </div>
        </div>
    </section>

    {/* hero */}
      <section className="text-center lg:text-left py-32 px-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">

        <Image src={productDemo} alt="Product demo" className="w-96 rounded-xl saturate-200" />

        <div>
          <h1 className="text-4xl font-extrabold mb-6">Collect customer feedback to build better products</h1>
          <div className="opacity-90 mb-10">
            Create a feedback board in minutes, prioritise features and build products your customers will love.
          </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name = {name} />
        </div>
      </section>

      {/* pricing */}
      <section className="bg-base-200" id="pricing">
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
            ["Collect customer feeedback", 
            "Unlimited boards", 
            "Admin dashboard", 
            "24/7 support",].map(
              (priceItem) => {
                return <li className="flex gap-2 items-center " key={priceItem}>
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

      {/* FAQ */}

      <section className="bg-base-200" id="FAQ">
      <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center ">
            Frequently Asked Questions
          </h2>
          <ul className="max-w-lg mx-auto">
            {
              [
                {question: "I have question", answer: "What is the answer"},
                {question: "I need to ask a question", answer: "What is the answer"},
                {question: "I must ask you a question", answer: "What is the answer"}
              
              ].map((qa) => (
                <FAQListItem key={qa.question} qa={qa}/>
              ))
            }
          </ul>
          
          </div>
        </section>
    </main>
  );
}

