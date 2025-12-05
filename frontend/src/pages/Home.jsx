import { useEffect, useState } from "react";
import api from "../api/apiClient";
import SampleBox from "../components/SampleBox";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        api
            .get("/sample")
            .then((res) => setData(res.data.message))
            .catch((err) => {
                console.error("API error:", err.message);
                setData("Error fetching data");
            });
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Frontend Connected to Backend</h2>
            <SampleBox text={data} />
        </div>
    );
}
