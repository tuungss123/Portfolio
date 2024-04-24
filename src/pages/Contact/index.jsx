import { useState } from 'react';
import { Element } from 'react-scroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Email: '',
    Subject: '',
    Message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postToGoogle();
    resetForm();
  };

  const postToGoogle = async () => {
    const formDataEncoded = new URLSearchParams({
      "entry.1577084788": formData.Name,
      "entry.1574602051": formData.Email,
      "entry.83699098": formData.Subject,
      "entry.78538648": formData.Message
    }).toString();
    
    try {
      await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfg_KJWRuYqZ0smb-0lneNFtkSB-MOqHV0FWNMnXNvx7YZv1w/formResponse", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formDataEncoded
      });
    } catch (error) {
      console.error('Error posting to Google:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      Name: '',
      Phone: '',
      Email: '',
      Subject: '',
      Message: ''
    });
  };

    return (
        <Element name='section3'>
          <div className="flex xs:flex-col xs:h-[600px] sm:h-[600px] 2xl:h-[600px] w-full font-[open sans] font-normal bg-[#232424]">
              <div className=" mx-auto p-8 rounded-lg lg:w-[30%]">
              <h1 className="text-3xl text-center mb-8 text-[white]">Hire Me</h1>
              <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                  <label htmlFor="name" className="block text-[white]">Name</label>
                  <input
                      type="text"
                      id="name"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      required
                  />
                  </div>
                  <div className="mb-4">
                  <div>
                      <label htmlFor="email" className="block text-[white]">Your Email Address</label>
                      <input
                      type="email"
                      id="email"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      required
                      />
                  </div>
                  </div>
                  <div className="mb-4">
                  <label htmlFor="subject" className="block text-[white]">Subject</label>
                  <input
                      type="text"
                      id="subject"
                      name="Subject"
                      value={formData.Subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      required
                  />
                  </div>
                  <div className="mb-4">
                  <label htmlFor="message" className="block text-[white]">Message</label>
                  <textarea
                      rows="4"
                      id="message"
                      name="Message"
                      value={formData.Message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      required
                  ></textarea>
                  </div>
                  <div className="text-center">
                  <button type="submit" className="py-2 px-4 bg-[#ffffff] text-[#000000] rounded-md hover:bg-[#3f3f41] hover:text-[white] focus:outline-none focus:bg-blue-600">Send Message</button>
                  </div>
              </form>
              </div>
          </div>
        </Element>
    );
}

export default Contact;
