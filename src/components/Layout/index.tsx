import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <main className={styles.layout}>{children}</main>
);

export default Layout;
