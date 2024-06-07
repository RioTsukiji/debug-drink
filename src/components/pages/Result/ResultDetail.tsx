import { Footer } from "../../templates/Footer";
import { menuAll, resultData } from "./ResultData";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const MenuList = ({
    menuList,
  }: {
    menuList: { name: string; price: number; content: string };
  }) => {
    return (
      <>
        <ul
          style={{
            paddingLeft: "15px",
            listStyleType: "square",
            color: "#4298b4",
            fontSize: "18px",
            marginBottom: "5px",
            fontWeight: "bold",
          }}
        >
          <li>
            <span style={{ color: "#343c4b", marginRight: "10px" }}>
              {menuList.name}
            </span>
            <br />
            <span
              style={{ color: "#343c4b", fontWeight: "normal", opacity: "0.5" }}
            >
              {menuList.price}
            </span>
            <span
              style={{
                fontSize: "10px",
                color: "#343c4b",
                paddingLeft: "1px",
                opacity: "0.3",
              }}
            >
              yen
            </span>
          </li>
        </ul>
        <p style={{ paddingLeft: "15px", marginBottom: "15px" }}>
          {menuList.content}
        </p>
      </>
    );
  };

  return (
    <>
      <div
        style={{
          border: "1px solid #DDDFE2",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        <h2 style={{ paddingBottom: "10px" }}>他のドリンクメニュー</h2>
        <p style={{ fontSize: "18px", marginBottom: "15px" }}>
          もちろん、診断結果以外のメニューを頼むこともできます！
        </p>
        <div>
          {menuAll.map((menuList) => (
            <MenuList menuList={menuList} />
          ))}
        </div>
      </div>
    </>
  );
};

const ResultDetail = () => {
  const location = useLocation();
  const { result } = location.state as {
    result: "stress" | "depression" | "tired" | "playful";
  };
  const ResultInfo = resultData[result];
  return (
    <>
      <div
        style={{
          backgroundColor: ResultInfo.color,
          padding: "80px 20px 20px 20px",
        }}
      >
        <h1 style={{ color: "white" }}>{ResultInfo.bugName}</h1>
        <h2 style={{ color: "rgba(0,0,0,0.6)", marginBottom: "30px" }}>
          {ResultInfo.alphabet}型のドリンク
        </h2>
        <div style={{ display: "grid", placeContent: "center" }}>
          <img
            src={ResultInfo.img}
            style={{ marginBottom: "20px", width: "200px" }}
            alt={ResultInfo.bugName}
          />
        </div>
        <h1 style={{ color: "white", marginBottom: "5px" }}>
          {ResultInfo.drink}
        </h1>
        <p
          style={{
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            paddingBottom: "5px",
          }}
        >
          {ResultInfo.drinkMessage}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "10px",
            opacity: "0.8",
            textAlign: "right",
          }}
        >
          ※写真はイメージです。
        </p>
      </div>
      <div
        style={{ backgroundColor: "#f9f9f9", padding: "20px 20px 100px 20px" }}
      >
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "10px" }}>材料</h2>
          <p style={{ fontSize: "18px" }}>{ResultInfo.drinkExplain1}</p>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "10px" }}>期待される効果</h2>
          <p style={{ fontSize: "18px" }}>
            {ResultInfo.drinkExplain2}
            <span
              style={{ opacity: "0.4", fontSize: "15px", paddingLeft: "5px" }}
            >
              ( ChatGPT, 2024 )
            </span>{" "}
          </p>
        </div>
        <Menu />
      </div>
      <Footer />
    </>
  );
};

export default ResultDetail;
