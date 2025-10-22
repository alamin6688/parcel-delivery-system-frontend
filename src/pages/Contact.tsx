import { MdEmail, MdLocationOn, MdPhone, MdWeb } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="bg-background text-foreground">
        <section className="min-h-[calc(100vh-286px)] max-w-screen-2xl mx-auto">
          <div className="px-4 md:px-6 pt-10 pb-16">
            <div className="animate__animated animate__slideInDown">
              <h2 className="text-3xl text-center font-extrabold pt-4 font-poppins text-blue-500 capitalize">
                Get in touch
              </h2>
              <p className="w-full md:w-2/3 mx-auto mt-4 text-center font-poppins text-[18px]">
                Our friendly team would love to hear from you. We are always
                here to assist with any questions or concerns you may have.
              </p>
            </div>

            <div className="gap-8 mt-10 items-center flex justify-center">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 animate__animated animate__slideInUp">
                <div className="text-center">
                  <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <MdEmail className="w-5 h-5" />
                  </span>
                  <h2 className="mt-4 text-base font-bold">
                    Email
                  </h2>
                  <p className="mt-2 text-sm ">
                    Our friendly team is here to help.
                  </p>
                  <p className="mt-2 text-sm text-blue-500">hello@gmail.com</p>
                </div>

                <div className="text-center">
                  <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <MdLocationOn className="w-5 h-5" />
                  </span>
                  <h2 className="mt-4 text-base font-bold">
                    Office
                  </h2>
                  <p className="mt-2 text-sm">
                    Come say hello at our office HQ.
                  </p>
                  <p className="mt-2 text-sm text-blue-500">
                    123 Gulshan Avenue, Dhaka 1212, Bangladesh
                  </p>
                </div>

                <div className="text-center">
                  <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <MdPhone className="w-5 h-5" />
                  </span>
                  <h2 className="mt-4 text-base font-bold">
                    Phone
                  </h2>
                  <p className="mt-2 text-sm">
                    Mon-Fri from 9am to 5pm.
                  </p>
                  <p className="mt-2 text-sm text-blue-500">+880 1234 567890</p>
                </div>

                <div className="text-center">
                  <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <MdWeb className="w-5 h-5" />
                  </span>
                  <h2 className="mt-4 text-base font-bold">
                    Website
                  </h2>
                  <p className="mt-2 text-sm">
                    Visit our website for more information.
                  </p>
                  <p className="mt-2 text-sm text-blue-500">
                    <a
                      href="https://www.example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.website.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
