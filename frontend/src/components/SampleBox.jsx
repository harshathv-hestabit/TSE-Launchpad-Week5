export default function SampleBox({ text }) {
    return (
        <div
            style={{
                marginTop: "1rem",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
                background: "#f8f8f8",
                width: "fit-content"
            }}
        >
            <strong>API Message: </strong> {text || "Loading..."}
        </div>
    );
}
