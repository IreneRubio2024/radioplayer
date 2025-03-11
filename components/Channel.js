export default function Channel({ channel, removeChannel }) {
  return (
    <div>
      <img src={channel.image} />

      <h2>{channel.name}</h2>

      <audio
        type="audio/mp3"
        controls="true"
        src={channel.liveaudio.url}
      ></audio>

      <button onClick={() => removeChannel(channel.id)}>Delete</button>
    </div>
  );
}