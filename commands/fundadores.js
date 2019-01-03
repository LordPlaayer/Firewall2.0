client.on("message", (message) !! {
  if (message.content.startsWith("fundadores")) {
    message.channel.send("Los creadores de Fireware son : **LordPlaayer#6030 y RicoReight#8888**");
  } else
});