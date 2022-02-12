import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children, selectedTab, setSelectedTab }) {
  return (
    <div>
      <Header setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      {children}
      <Footer />
    </div>
  );
}
