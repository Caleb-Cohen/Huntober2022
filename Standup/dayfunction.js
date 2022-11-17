JG.repeat(5, 10, {
    title: JG.firstName()+"'s event",
    description: JG.loremIpsum({units: 'words', count: 10,}),
    date: JG.date(new Date(2022, 10, 1), new Date(2022, 11, 31)),
    startTime: function (){
      return `${this.date.toLocaleString('en-US',{hour: '2-digit', minute:'2-digit'})}`;
    },
    recurringDates: {
        rate: JG.random('Weekly', 'Daily', 'No Recurring'),
      days: function newDays(){
      let daysCount = Math.floor(Math.random()*7)
      let daysArr = []
      let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      for(let i = 0; i <= daysCount; i++){
        let randomNum = Math.floor(Math.random()*7)
          if(daysArr.indexOf(daysOfWeek[randomNum]) === -1){
            daysArr.push(daysOfWeek[randomNum]) 
        }
      }
    return  daysArr
      },
    },
    endTime: function (){
        let currentTime = this.date.getTime()
      let randomNum = Math.floor(Math.random()*60*60*1000)
      return new Date(currentTime + randomNum).toLocaleString('en-US',{hour: '2-digit', minute:'2-digit'})
    },
    location: JG.random('remo', 'discord'),
    user: function (){
     return this.title.slice(0, -8)+`#${Math.floor(Math.random()*1000)}`
    },
    createdAt: function (){
      return new Date()
    },
    id: JG.objectId( ),
    email() {
      return (
        _.snakeCase(this.profile.name) +
        '@' +
        this.profile.company +
        JG.domainZone()
      ).toLowerCase();
    },
    username() {
      return (_.words(this.profile.name)[0] + moment(this.profile.dob).format('YY')).toLowerCase();
    },
    profile: {
      name: `${JG.firstName()} ${JG.lastName()}`,
      company: JG.company(),
      dob: moment(JG.date(new Date(1988, 0, 1), new Date(1995, 0, 1))).format('YYYY-MM-DD'),
      address: `${JG.integer(1, 100)} ${JG.street()}, ${JG.city()}, ${JG.state()}`,
      location: {
        lat: JG.floating(-90, 90, 6),
        long: JG.floating(-180, 180, 6),
      },
      about: JG.loremIpsum({ units: 'sentences', count: 2 }),
    },
    apiKey: JG.guid(),
    roles: _.uniq(JG.repeat(2, JG.random('owner', 'admin', 'member', 'guest'))),
    //createdAt: JG.date(new Date(2010, 0, 1), new Date(2015, 0, 1)),
    updatedAt() {
      return moment(this.createdAt).add(1, 'days');
    },
  });
  