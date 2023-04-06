import { AppDetail, AppsAndGamesData } from "../DataType"

export const allApps = Array<AppDetail>()
allApps.push({imageUrl:'../draw-on.png', pageUrl:"../draw-on", title:"Draw On", description:"A simple drawing app to draw your needs. It will help in showing your art."})
allApps.push({imageUrl:'../word-search.png', pageUrl:"../word-search", title:"Word Search", description:"A simple word search game in which you have to find the words before you ran out of time."})
// add more apps here...

export const releasedAppsData: AppsAndGamesData = {heading:"Our Apps & Games", description:"See our apps and games which is available on Play store", apps:allApps}
