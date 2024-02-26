import { useState, createElement } from "react";
import Modal from "react-modal";
import { Flex, Progress } from "antd";
import { myDatas } from "../myData";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

Modal.setAppElement("#root");

function Skills() {
  const { skills } = myDatas;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="min-h-fit bg-bg_light_danger" id="skills">
        {/* modal */}
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          data-aos="zoom-in"
        >
          {selectedSkill && (
            <>
              <div className="flex items-center gap-2">
                <img className="h-10" src={selectedSkill.logo} alt="..." />
                <h6>{selectedSkill.name}</h6>
              </div>
              <br />
              <Flex className="flex justify-center">
                <Progress type="circle" percent={selectedSkill.percentage} />
              </Flex>
              <br />
              <div className="flex justify-end">
                <button onClick={closeModal} className="btn">
                  Close
                </button>
              </div>
            </>
          )}
        </Modal>

        {/* content */}
        <div className="md:container px-5 py-10">
          <h2 className="title" data-aos="fade-down">
            {skills.title}
          </h2>
          <h4 className="subtitle">{skills.subtitle}</h4>
          <br />
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.skills_content.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 400}
                className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
              >
                <div>
                  <img
                    src={skill.logo}
                    alt="..."
                    className="w-10 group-hover:scale-125 duration-200"
                  />
                </div>
                <div>
                  <h6>{skill.name}</h6>
                  <p className="italic">{skill.para}</p>
                  <div
                    onClick={() => openModal(skill)}
                    className="text-xl absolute top-3 right-3"
                  >
                    {createElement(skills.icon)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
