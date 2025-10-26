import { Mosaic, OpenAIModel, OpenAIText, OpenAITools } from "@jigjoy-io/mosaic"
import { Meteorologist } from "./agents/meteorologist"
import { WeatherDB, WeatherTool } from "./tools/weather"
import { MeteorologistWithTool } from "./agents/meteorologist-with-tool"

const mosaic = new Mosaic()
  .withText(new OpenAIText(OpenAIModel.GPT_5_MINI))
  .withTools(new OpenAITools(OpenAIModel.GPT_5))
  .build()

//tools
let weatherTool: WeatherTool = new WeatherTool(new WeatherDB())

// agents
export const meteorologist = new Meteorologist(mosaic)
export const meteorologistWithTool  = new MeteorologistWithTool(mosaic, [weatherTool])