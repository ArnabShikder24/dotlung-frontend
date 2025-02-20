const ContactNav = ({ title, phone, email, tips, socialLinks }) => {
    return (
      <nav className="w-full p-4 font-gilroy mt-5">
        <div className="flex items-center justify-center">
          <div className="max-w-3xl flex-1 mx-20 flex justify-center">
            <div className="flex w-full">
              <div style={{ width: "85%" }}>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                  </div>
                  <div>
                    <p className="text-lg font-caslon">{phone}</p>
                    <p className="text-lg font-caslon">{email}</p>
                  </div>
                </div>
                <div className="flex justify-between mt-10">
                  <div>
                    <p className="italic text-secondary mt-4">{tips.title}</p>
                    <p className="mt-2 text-lg font-caslon">{tips.description}</p>
                  </div>
                  <div className="flex flex-col text-lg mt-4" style={{ width: 140 }}>
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        style={{ fontSize: 14 }}
                        className="hover:underline mb-3"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  

  
  export default ContactNav;
  