import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/modal.module.css";

const animationModal = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.01,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.01,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.01,
    },
  },
};

const Modal = (props) => {
  return (
    <main>
      {props.showModal && (
        <motion.div
          variants={animationModal}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.main}
          onClick={() => props.setShowModal(false)}
        >
          <motion.div
            className={styles.modalWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            {props.children}
            <button onClick={() => props.setShowModal(false)}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
};

export default Modal;
