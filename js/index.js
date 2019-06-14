window.onresize = function () {
  var mobile = false
  ;(function mobilecheck () {
    ;(function (a, b) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      ) { mobile = true }
    })(navigator.userAgent || navigator.vendor || window.opera)
  })()

  console.log(mobile)

  if (
    mobile == true &&
    document.documentElement.clientHeight <= $(window).width()
  ) {
    document.getElementById('landscape__overlay').style.height = '100%'
  } else if (
    mobile == true &&
    document.documentElement.clientHeight >= $(window).width()
  ) {
    document.getElementById('landscape__overlay').style.height = '0'
  }
}

/*******************************************************************/
/** ARRAYS**/
var players = ['Player 1', 'Player 2', 'Player 3', 'Player 4']
var modes = [
  'Soccar',
  'Soccar',
  'Soccar',
  'Soccar',
  'Hoops',
  'Hoops',
  'Hockey',
  'Hockey',
  'Dropshot',
  'Dropshot'
]
var rumbleYN = ['Regular', 'Regular', 'Regular', 'Rumble', 'Rumble']
var rumbles = [
  'Default',
  'Slow',
  'Civilized',
  'Destruction Derby',
  'Spring Loaded',
  'Spikes Only'
]
var mutatorYN = [
  'No Mutators',
  'No Mutators',
  'No Mutators',
  'No Mutators',
  'Mutators',
  'Mutators'
]
var maps = [
  'DFH Stadium',
  'Mannfield',
  'Champions Field',
  'Urban Central',
  'Beckwith Park',
  'Utopia Coliseum',
  'Wasteland',
  'Neo Tokyo',
  'Aquadome',
  'Starbase Arc',
  'Salty Shores',
  'Farmstead',
  'DFH Stadium (Stormy)',
  'DFH Stadium (Day)',
  'Mannfield (Stormy)',
  'Mannfield (Night)',
  'Beckwith Park (Night)',
  'Beckwith Park (Stormy)',
  'Champions Field (Day)',
  'Wasteland (Night)',
  'DFH Stadium (Snowy)',
  'Mannfield (Snowy)',
  'Utopia Coliseum (Snowy)',
  'Utopia Coliseum (Dusk)',
  'Badlands',
  'Badlands (Night)',
  'Tokyo Underpass',
  'Arctagon',
  'Two Pillars',
  'Cosmic',
  'Double Goal',
  'Octagon',
  'Underpass',
  'Utopia Retro',
  'Throwback Stadium',
  'Rivals Arena',
  'Urban Central (Night)',
  'Urban Central (Dawn)'
]
/* var maps = ["Utopia Coliseum (Dusk)"];

/**MUTATOR ARRAYS**/
var matchLengthM = ['5', '5', '5', '5', '5', '5', '5', '10', '10' /* "20" */]
var maxScoreM = [
  'Unlimited',
  'Unlimited',
  'Unlimited',
  'Unlimited',
  'Unlimited',
  'Unlimited',
  '1 Goal',
  '3 Goals',
  '5 Goals'
]
var overTimeM = [
  'Unlimited',
  'Unlimited',
  '+5 Max, First Score',
  '+5 Max, Random Team'
]
var seriesM = ['1', '1', '1', '1', '1', '1', '1', '3', '5', '7']
var gameSpeedM = [
  'Default',
  'Default',
  'Default',
  'Default',
  'Slo-Mo',
  'Time Warp'
]
var ballMaxSpeedM = [
  'Default',
  'Default',
  'Default',
  'Slow',
  'Fast',
  'Super Fast'
]
var ballTypeM = ['Default', 'Default', 'Cube', 'Basketball', '10th Anniversary']
var ballWeightM = [
  'Default',
  'Default',
  'Light',
  'Heavy',
  'Super Light',
  '10th Anniversary'
]
var ballSizeM = ['Default', 'Default', 'Small', 'Large', 'Gigantic']
var ballBouncinessM = ['Default', 'Default', 'Low', 'High', 'Super High']
var boostAmountM = [
  'Default',
  'Default',
  'No Boost',
  'Unlimited',
  'Recharge (Slow)',
  'Recharge (Fast)'
]
var boostStrengthM = ['1x', '1x', '1x', '1.5x', '2x', '10x']
var gravityM = ['Default', 'Default', 'Low', 'High', 'Super High']
var demolishM = [
  'Default',
  'Default',
  'Disabled',
  'Friendly Fire',
  'On Contact',
  'On Contact (FF)'
]
var respawnTimeM = ['3 Secs', '3 Secs', '2 Secs', '1 Sec', 'Disable Goal Reset']

/** *****SWITCH VARS********/
var quickPick = document.getElementById('quickpick')
var modeSwitch = document.getElementById('switch2')
var rumbleSwitch = document.getElementById('switch3')
/**********************************/

/** ******PICK FUNCTIONS********/
quickPick.onclick = function quickPick () {
  /** Team Selector**/
  var player1
  var player2
  var player3
  var player4
  function shuffleTeam () {
    var arr = players.sort(function (a, b) {
      return 0.5 - Math.random()
    })
    player1 = arr[0]
    player2 = arr[1]
    player3 = arr[2]
    player4 = arr[3]
  }
  shuffleTeam()

  /** Mode Selector**/
  var modeResult = ''
  function mode () {
    if (modeSwitch.checked == true) {
      modeResult = modes[Math.floor(Math.random() * modes.length)]
    } else {
      modeResult = 'Not Selected.'
    }
  }
  mode()

  /** Rumble Selector**/

  function rumble () {
    if (rumbleSwitch.checked == true) {
      var onOrOff = rumbleYN[Math.floor(Math.random() * rumbleYN.length)]
      if (onOrOff == 'Regular') {
        return 'Off'
      } else {
        return rumbles[Math.floor(Math.random() * rumbles.length)]
      }
    } else {
      return 'Not Selected.'
    }
  }

  /** Map Selector**/
  var map = ''

  ;(function mapChoice () {
    if (modeResult == 'Hoops') {
      map = 'Dunk House'
    } else if (modeResult == 'Dropshot') {
      map = 'Core 707'
    } else {
      map = maps[Math.floor(Math.random() * maps.length)]
    }
  })()

  /** Select Background Image**/
  var mapURL
  var mapImg = function (map) {
    var stripped = map.replace(/\W/g, '').toLowerCase()
    console.log(stripped + '.png')
    mapURL = 'url(images/maps/' + stripped + '.png)'
    return 'url(images/maps/' + stripped + '.png)'
  }

  /** Add Background Image**/
  document.getElementById('bg__wrapper').style.backgroundImage = mapImg(map)

  /** Mutator Selector**/
  function mutator () {
    var onOrOff = mutatorYN[Math.floor(Math.random() * mutatorYN.length)]
    if (onOrOff !== 'Mutators') {
      return 'No Mutators'
    } else {
      var matchLength =
        matchLengthM[Math.floor(Math.random() * matchLengthM.length)]
      var maxScore = maxScoreM[Math.floor(Math.random() * maxScoreM.length)]
      var overTime = overTimeM[Math.floor(Math.random() * overTimeM.length)]
      var series = seriesM[Math.floor(Math.random() * seriesM.length)]
      var gameSpeed = gameSpeedM[Math.floor(Math.random() * gameSpeedM.length)]
      var ballMaxSpeed =
        ballMaxSpeedM[Math.floor(Math.random() * ballMaxSpeedM.length)]

      var ballType = function () {
        if (modeResult == 'Hockey') {
          return 'Puck'
        } else if (modeResult == 'Dropshot') {
          return 'Default'
        } else {
          return ballTypeM[Math.floor(Math.random() * ballTypeM.length)]
        }
      }

      var ballWeight =
        ballWeightM[Math.floor(Math.random() * ballWeightM.length)]
      var ballSize = ballSizeM[Math.floor(Math.random() * ballSizeM.length)]
      var ballBounciness =
        ballBouncinessM[Math.floor(Math.random() * ballBouncinessM.length)]
      var boostAmount =
        boostAmountM[Math.floor(Math.random() * boostAmountM.length)]
      var boostStrength =
        boostStrengthM[Math.floor(Math.random() * boostStrengthM.length)]
      var gravity = gravityM[Math.floor(Math.random() * gravityM.length)]
      var demolish = demolishM[Math.floor(Math.random() * demolishM.length)]
      var respawnTime =
        respawnTimeM[Math.floor(Math.random() * respawnTimeM.length)]

      return (
        '<ul><li>Match length: ' +
        matchLength +
        '</li><li>Max Score: ' +
        maxScore +
        '</li><li>Over Time: ' +
        overTime +
        '</li><li>Series: ' +
        series +
        '</li><li>Game Speed: ' +
        gameSpeed +
        '</li><li>Ball Speed: ' +
        ballMaxSpeed +
        '</li><li>Ball Type: ' +
        ballType() +
        '</li><li>Ball Weight: ' +
        ballWeight +
        '</li><li>Ball Size: ' +
        ballSize +
        '</li><li>Ball Bounciness: ' +
        ballBounciness +
        '</li><li>Boost Amount: ' +
        boostAmount +
        '</li><li>Boost Strength: ' +
        boostStrength +
        '</li><li>Gravity: ' +
        gravity +
        '</li><li>Demolition: ' +
        demolish +
        '</li><li>Respawn Time: ' +
        respawnTime +
        '</li></ul>'
      )
      /** "Mutators: " + matchLength+" "+maxScore+" "+overTime+" "+series+" "+gameSpeed+" "+ballMaxSpeed+" "+ballType+" "+ballWeight+" "+ballSize+" "+ballBounciness+" "+boostAmount+" "+boostStrength+" "+gravity+" "+demolish+" "+respawnTime;**/
    }
  }

  /** **Adding Data to HTML****/
  document.getElementById('team1').innerHTML = player1 + ' + ' + player2
  document.getElementById('team2').innerHTML = player3 + ' + ' + player4
  document.getElementById('mode').innerHTML = modeResult
  document.getElementById('rumble').innerHTML = rumble()
  document.getElementById('map').innerHTML = map
  document.getElementById('mutators').innerHTML = mutator()

  /** **Card Flip****/

  document.getElementById('card').classList.toggle('is-flipped')
  document.getElementById('front').classList.add('hidden')
  setTimeout(function () {
    document.getElementById('back--visible').classList.add('visible')
  }, 700)

  /** ODOMETER**/
  var points = function () {
    var min = 100
    var max = 400
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var points2 = function() {    
    min = 100;
    mid1 = 500;
    mid2 = 650;
    max = 1000;
    var regLimit = 1;
    var midLimit = 0.10;
    var maxLimit = 0.05;  
    var num  = 0;
    var r = Math.random();
    if (r <= maxLimit) {
      num = getRandomNum(mid2, max);
    }
  
    else if (r > maxLimit && r <= midLimit) {
      num = getRandomNum(mid1, mid2);
    }
    else {
      num = getRandomNum(min, mid1);
    }  
    return num; 
  }

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var odometer = document.getElementById('numberSpan')

  setTimeout(function () {
    odometer.innerHTML = points2()
  }, 1000)
}
/** ******END OF QUICKPICK FUNCTION********/

document.getElementById('reload').onclick = function reload () {
  document.getElementById('card').classList.toggle('is-flipped')
  document.getElementById('front').classList.remove('hidden')
  setTimeout(function () {
    document.getElementById('bg__wrapper').style.backgroundImage = ''
  }, 725)
}

/*****************************************/
/** *****START OF CUSTOM FUNCTIONS********/
var customButton = document.getElementById('custompick')
var childWrapper = document.getElementsByClassName('child__wrapper')
var settings = document.getElementById('settings')

customButton.onclick = function custom () {
  childWrapper[0].classList.toggle('top15')
  settings.classList.toggle('open')
}
/**********************************/
