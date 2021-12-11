const pusher = new Pusher("4bc9cb463c8e0cf1f124", { cluster: "us2" });
const channel = pusher.subscribe("this-channel");

const App = () => {
  return (
    <div>
      <h1>Pusher.js</h1>
      <p>Testing...</p>
      <button
        onClick={() => {
          channel.bind("some-event", (data) => {
            console.log(data);
          });
        }}
      >
        Pusher Event
      </button>
    </div>
  );
};

export default App;
