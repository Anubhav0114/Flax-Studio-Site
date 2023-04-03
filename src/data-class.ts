
// ----------------------------- For apps and games -------------------------------
export class AppsAndGamesData {
    constructor(public heading: string, public description: string, public apps: Array<AppDetail>) { }
}

export class AppDetail {
    constructor(public imageUrl: string, public pageUrl: string, public title: string, public description: string) { }
}


// ----------------------------- For profile -------------------------------
export class ProfileData{
    constructor(public heading: string, public description: string, public profiles: Array<ProfileDetail>){}
}

export class ProfileDetail{
    constructor(public imageUrl: string, public pageUrl: string, public name: string, public about: string) { }
}

