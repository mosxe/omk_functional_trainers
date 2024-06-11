import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

const Alert = () => {
  return (
    <div>
      <ToastContainer
        autoClose={250000}
        toastClassName={styles.toast}
        hideProgressBar
        closeOnClick
      />
    </div>
  );
};

export default Alert;
