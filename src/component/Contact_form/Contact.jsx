import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_cjr306h";
const TEMPLATE_ID = "template_e50tpvn";
const PUBLIC_KEY = "MBo4UemXrHU9xWSnt";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div
      className="contact font-serif "
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
    >
      <div className="container ">
        <p className="my-8 text-zinc-400">contact us/&gt;</p>
        <div className="w-full text-center  flex justify-center ">
          <Form
            onSubmit={handleOnSubmit}
            className="grad  w-[850px] p-8 rounded-md"
          >
            <div className="gap-8 mb-8  text-white">
              <Form.Field
                className="text-[30px] mb-8"
                id="form-input-control-email"
                control={Input}
                name="user_email"
                placeholder="Email…"
                required
                icon="mail"
                iconPosition="left"
              />
              <Form.Field
                className="text-[30px]"
                id="form-input-control-last-name"
                control={Input}
                name="user_name"
                placeholder="Name…"
                required
                icon="user circle"
                iconPosition="left"
              />
            </div>
            <div className="w-full my-8">
              <Form.Field
                className=" mx-auto text-[30px] "
                id="form-textarea-control-opinion"
                control={TextArea}
                name="user_message"
                placeholder="Message…"
                required
              />
            </div>
            <Button
              type="submit"
              className="border mt-4 w-full border-blue-600 bg-black hover:bg-[#071cf9]  w-[150px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
