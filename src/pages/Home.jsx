import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const App = () => {
  const { data, deleteItem, setData } = useContext(UserContext);
  const [titleInput, setTitle] = useState("");
  const [backInput, setBack] = useState("");
  const [infoInput, setInfo] = useState("");
  const [getId, setGetId] = useState("");
  const url = "https://6628965454afcabd07363977.mockapi.io/test";

  const onDelete = (id) => {
    deleteItem(id);

    const newData = data.filter((v) => v.id !== id);
    setData(newData);
  };

  const addValue = () => {
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: titleInput,
        back: backInput,
        info: infoInput,
      }),
    })
      .then((res) => res.json())
      .then((result) => setData([...data, result]));
  };
  const addData = () => {
    addValue();
  };
  const rote = (id) => {
    if (getId !== id) {
      setGetId(id);
    } else {
      setGetId(undefined);
    }
  };
  useEffect(() => {
    axios.get(url).then((result) => setData(result.data));
  }, []);
  return (
    <div>
      <div className="flex justify-center gap-[50px] mt-[50px]">
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          className="h-[40px] p-2 rounded-xl border-2 border-lime-500 outline-none w-[300px]"
          type="text"
        />
        <input
          onChange={(e) => setBack(e.target.value)}
          placeholder="back"
          className="h-[40px] p-2 rounded-xl border-2 border-lime-500 outline-none w-[300px]"
          type="text"
        />
        <input
          onChange={(e) => setInfo(e.target.value)}
          placeholder="info"
          className="h-[40px] p-2 rounded-xl border-2 border-lime-500 outline-none w-[300px]"
          type="text"
        />
        <button
          onClick={addData}
          className="w-[100px] text-white rounded-xl bg-lime-500 h-[40px]"
        >
          Add
        </button>
      </div>
      <div className="grid grid-cols-5 gap-y-7 py-8">
        {data.map((v) => (
          <div
            onClick={() => rote(v.id)}
            key={v.id}
            className={`transition-all duration-700 border border-[black] w-[220px] h-[200px] flex flex-col rounded-2xl ${
              getId === v.id ? "rotate1" : ""
            }`}
          >
            <div className="text-end">
              <button
                onClick={() => onDelete(v.id)}
                className={`w-[30px]  relative left-2 bottom-2 h-[30px] bg-red-500 text-white rounded-[50%] ${
                  getId === v.id ? "hidden" : ""
                }`}
              >
                -
              </button>
            </div>
            <div
              className={`flex flex-col pb-[20px] transition-all duration-800 text-center justify-center items-center h-full ${
                getId === v.id ? "hidden" : ""
              }`}
            >
              <h1 className="font-semibold">{v.title}</h1>
              {v.info.length === 0 ? "" : <p>{`(${v.info})`}</p>}
            </div>
            <div
              className={`flex transition-all duration-1000 text-center justify-center items-center h-full ${
                getId !== v.id ? "hidden" : ""
              }`}
            >
              <h1 className="d1 w-[100px]">{v.back}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
