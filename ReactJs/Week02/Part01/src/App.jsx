import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StudentInfo from "./components/StudentInfo/StudentInfo";

function App() {
  const studentData = {
    hoTen: "Nguyễn Văn A",
    mssv: "2021600001",
    lop: "DHKTPM17A",
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header title="Giới Thiệu Sinh Viên" />

      <main style={{ flex: 1, background: "#f0f4f8", padding: "2rem 1rem" }}>
        <StudentInfo
          hoTen={studentData.hoTen}
          mssv={studentData.mssv}
          lop={studentData.lop}
        />
      </main>

      <Footer text="Week02_Lab01" author="PhamVanTra" year={23633471} />
    </div>
  );
}

export default App;
