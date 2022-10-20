let state = {
  profilePage: {
    posts: [
      { message: "Hello world!", amountLikes: "20" },
      { message: "Как же сейчас ПРОНЕСЛО.", amountLikes: "41" },
      { message: "I like webpack!", amountLikes: "25" },
      { message: "Hello world!", amountLikes: "20" },
      { message: "", amountLikes: 2 },
      { message: "", amountLikes: 3 },
      { message: "", amountLikes: 32 },
    ],
    friendItems: [
      {
        id: 1,
        name: "Joe Pavelski",
        avatarUrl:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhUYGRgaHBoaGBwaHBgYHBoZGRoaGhwaGBkcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQkJSQ0NDQ0NDQxNDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNP/AABEIAQgAvwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xABDEAACAQIDBQYDBQcCAwkAAAABAgADEQQhMQUSQVFhBiJxgZGxE6HRBzJiwfAUI0JScoLhkvEXotIVJDNDVJOjwuL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQACAgEEAgMBAQEAAAAAAAAAAQIRAxIhMUETUQQiMnGRQv/aAAwDAQACEQMRAD8APeI7Rm9OaBArQVTOKxg2N4yhHy0iO150SIkJRvJitIKPOer6wKJdapYSMK3pIzuTrGVHAF2YKOpA94AWQe41gXcmU3/a9BSL1ktobMDbiDlA1e1OHGhc9Qp9zaAqNCj2Ea1pRUe01E5DePoPeSKW2qN7MSv9Qy9ReK0FMtADHhyImHqq4ujBhzUgj5R7rGMC9SR3aFqgyIxuYAOMcIMuI4ZwJCJaPg7Zx29AB948AQQNo5TAA5aOBgw2UcsAOZowQjCDAgA1jEveOYQFSoFBZiABmSTYAdTAB8j4vG06S7zsFHXj4DU+Uzm1O1liVogH8Taf2rx8TMxicS9Vt52LMeJt8uAEB0aDavagtdaII/Gcjb8I4eJmeqOxJLMzdSSfPOIARkVMfSosx7oufKJstICi3yk2jhAf4gDyB3vUXFpJo0So76H1zi2o8N5W5NlfzAPzkORSiMGF3cyAeqkg+Vx7wy1QR97yZQD5FbCCdlt7HI/MZj0kdri5zt/qHnx84uR1RLSq6Nv0nKnjuk3/ALlIzHrLvAdrH0rKGH8yCx81vb2mYQhtNeX0jkPrz4f3Dl1jTaE0mejUsSlRQyNcH18xGVU5TF7J2r8N+QJs3ra/64TbUaodcmBy6S07M2qAqkaWko0xAOsokVASbwqiMEegiAUrHLHokUraACqI9YwR4gA+8EI8GNMAGMJhO1O2PiMaSHuKcyM95hy6CX3bHHFKO4DZnNstd0a/r6zzyA0giAXz+saRn+hEAhqYOm6T6xFjUBMmUKDfeI9YWgqL9+n4X3h85Z4ZEy3CUPAhgf8A7XkSkVFFfVqk/cBXwa35X+ciVcSwyvvDr3vmZbYliD3wrcjYr9L/AKzgSo4Lw4H6n85OpFaWQqRWxIybkcwfCOoVBf8Al6fwn6S0pbOL5heGZy/KBq7JYcItaKUWV9gGVhl3rEfKJijuvcZ2IPiDz8RaWD7PYkm3W/CRMXQ3Tb9co4zTYpQaRXvr7eX+JZ7G2o1N1BPdJF+YFxzlc621gyvKaoyaPWEcMARpEZZl+yG1bj4LXJAJU65DhNVeMhg2WKiwm7xjWgIOhnVYNDJORgUBJj1jAIRRAk60Qx9oxoAeb9rcQWxDgnJLKo5WAv6m5lHJONqMzuzG7FiSet+EFTS5istI6mhOks8DTcG4Fx1XeHnylpsDYj1msBZRa/M+s2eE7PBDYfPPymE8qWx0Qwt7mPffeylCf6CbeO6wP5SRS2FXK91XC8QVy97T0rZ+y0XMqB4frKXlOiAMhlMtb6N1hXZ47h+z1TjkOt7H108pYYfsmxYGy25/Uj6T1X4C/wAo9IooKNFElyZaxxRksL2Z3V69NIyrsBrG9vGbACIySS9KPOcbsxh3bHlf2+kzW09kOpLbpI4+Ws9hxFBTwlLi8KpuCBBScSZQUkeOV6Iva3h48j+uEAuHGWeuQ+k3m09gLfIZZmY/aOF3G3Dw0PvN4ZL2OWePSQKG9TcMuqm+fsZ6Js/FLURXHEeh4iYD4LZm9+vOw1ml7JV/vpfkwHU6zoUtznlHY1KiM3I86RQMpRmMtCgwaGOWBQoEeIxTHmBIpMg7WcrRqMNQjkeO6ZMvIW1h+5qf0N7GAHlMm7PwxZpGCZSfstrMP16yJPY2itz03svSCIAPGXwaUGwGuvMZZy9Uzhm9z0ca+pY4ZrSyptlpKrDPaWFOoLRJlNBwYt4MPHb0YHNeJvTmaDYwGCrmVmIEsasr3OcljRX1k6TE9pMIpYnQ85vMSJlu0lHpKg6ZnlVowgQjqufkRb/EtOzGVf8AqU28rfleQMSSu9bnc9dM/OS9gvauny/0n2nXHk8+Ruico0kmOUZTh0mxgcFigRYtoAIqxxEKtLKL8PSMAYSQtqC1N/6G9jLUiV+10PwalhnuN7GIDydshJWFTvADzkcnnD4djvCZS4No8np/Z5LIJfIZR9nkIpLvCxl2hvOOXJ6MNoknDm5lxQp3ErMMyi1zLSliFA1EEimxd20cFjfjg6GPDiAWcUibka+IHpIGI20iWDfKGwrZKxFPKVOJFjFrbeQiylfWQam0b6iDoakFc3mf7TKdy44fnLdsSOBgMZSDoyniJK2B7o8lrVSXN5M2G9q6D8X1kfa+GZKjAixvO2ZVIrUyBmGX3tO6LtJnnTVWj01Uyi7sIpy0jgk1MQBGccwhlSMIjJJIMW8ArWjgYAFKyPirBTlc2OX16QhMjYlHawRt0nImwNhnzkZJOMbRrhgpzUWeVV6R3yLcSfWWHZ/Cb9ZV4XF/ea3b+wLUg9gSu7cgWubgEkCQOxuHAqMx1A9JzudxOnxaZpG1eyrlw/KQxjGJsgveSKylrKOOvO0iYqt8Fe6hJ4XyA6k8fATnOphaq4iwKoTbre/jKTG7QxKGxUqP6gI/EVsXURijEAep57qjTzuYHYGzsQ9Rviq6JvFrkk2Wx7u6wzzsby1G1Zm5JSqmWOzduult4H5mbLZmJL97hMpQ2V3rFbAHVbqDbmp08potnPbITPs2HbTDLcqdeExO0qjsTc28NflnNptJ9JTvs/ePdIUH73BvAHgIq3KaMxhsKtx8R2XlcovoCbzQ0cLhgPvH1Nj56GQdtdkxVI3HKfcuLb1ym9Yk6k97jH0ezDIl1dg5JuTkDfP7vj7zTSqtMwuWqmtg+JwPFGsI/C1SVz1GsfgcG6LZr58iLeh0ha9HdN7EXkWapGH7ZYbvhhofeU+y8GXdTbIHXTmdeGk03atL7pk3YezglJCw77XZeinMDxvNozqJh47yFhgH3l1v15ybAoqrkOGUkJYzqhelWcOWtbr2Lu5ZQW5aHWJUMsgjXigwN4paMkKXhcK12tz08Rn9ZEBvDUnKkNyN5E43Fo1xS0zTJ+LphsO4NyCpsBlnwPrMd2Yyd5uawBpixyuQfX6WmNwibmIqKOZ9NROHpnptbqRrcGATJBwym+Q9PaV+DeXeHa+klIqgFPD7osEB6mwhP2RvwjwzPqZNCTnP60lUKior0wPGCw797KFxrZx2zKFzvGI0QLaV7CDwliZO2pT7t5V4V7EXi4B7l1+yoYpwq8L+phqGYjysdEEHEYXjKvaJy8Jd1WylBtB73iaBGU7SDuqfETQYBD8BCcyoB8JQ7bzVR1mgotamBpfdAHhn+UqKukTxql6QiJeGSnaIg4wt56B5N2cBFsOM4tEBgBBtFisYMaxkhgwi70EY5YAWOCe4I1tw9iJS7Ww4TEo4OToL+IJk2jU3WBHCB7QbrKtQaKfmc/rOLLDS79npYsmqNeg+DeW+Eqyiweg8JYYZ5kdMWaGjUAlbj8cb7oj3ey3lWlPM1HOX8P1g5dFUuQG0celJSztYDzPpD9n+0FOopKsCNORHQg6Svx606jC4vY6EXBtzjauBQpuoFQ55AW9LQTRLsuds7YRUsWAGpJNrecq8Hj6VRTuureBkKjgsj8Qqwtpre3OLRWkjBwoB0yFhl7xWhrc0mz8WUO6fKW5rSgw7K4yPgessqV920ExtDcRVylJjKl7ywxTStxQyibEylKb1amDoGB9CCZonQFzy/P8A295m6b/v16EZc/1nNIMhN8Eblfo4886TS7OUWjXqCczQRN52HCPWFEEseucAIbnONQWj2UwTtAkI+cUGMQxbwKHiRdpC6ML5ayTB4hLqRzEmcdUaHCTi7QHY9a4A1NpboLGZrY77jkHrrzyP68JdpirnXP8A2/zPOlserB2iyxWKAAB8+nSU2PxrMbD7oFsvcQ7DeLH9E6SFtHGLQF2tzz110kbtmljKeGa/hw6W/wAGSXwVQqSuZscuueXtIOy8a+IJFBN42JuTYZai545y92bsXGtuBiiKyltSbWtkbDWaKFci1R7ZHpYF1Avx68evnA/snMZkfMZfSW+H7NYks29VCbt7EDeDG1xr4wFTs7iQyk11N0LG405WtBxQOUeEyJQAXQWsb9PD195YYfaFj3rWMy9HbDrWai6EsBmwzFjpcjSXpoELe1geB4GRKLiCdkzGONeEr8S/dEe9U2UHjIm0aoCdfobGCYMqdkkviCbfdvf9ec0rNaZ/sxTuXfmQPeaAreehhVRPKzO5MCQTrOOUexiAXmpmchvJCQSraGRYARngUpXMIWvHqtoANRBEKZSQUg92AA92IRDBYu5ADM7UXcdW4E28DcflJVOp3wQdQMve/wA5K2thd9GUa2uviPbUzOjE2yOTaHhYfrKefmj9nR6OGX1Vm0w1VQN7XS3hx9/aTqaU3BuoJtxHA529pkqGPswB5ZDw/Qmh2Xit9bkjPX1P5C/nMU2mdK3R2Ew60nJQBTrkLXJyzHGW+Fx9ZLC4bIi5Gp5m30kSpTBz8xnw0jRWK5A+s1Ul2L6ye6D1to4veJD01UnQIxPqWMjOHsDUdnfMAkKtla1wAoGWQ1iNjGGpUae5H5R5be+8b8ByEeqKH9VwhmApqGuAOskYyopBB5e0Hkoy6yp2liwOOdr5+enPKxmUpA3ZCx+KFjloc/Yj5yp2njLjy/xB43FbxYjgdPM5/KQqXfqADMXF+g6/L0jiiJM1uwaW7RTKxIufGT3MFs4AUwOV/cwxF56UPyjyp/p/0HHiKqR4SUScsKmQjQJ0AIpScCY6dAByvHCCAhEEAHKkduzljw0AI1Re8PMTJdpMCabhwO6xFzwB6/rhNjW+8vnAbUwArIQc7ZjxAynFl/Z34VeNHn9LE96976jjkNZeYTF2AANiScgdBb5nL5ylxGGKEg/q1uPr6R+DrEi3EZeHAWmUo2rRpGVOmbrDY4Mpa/AAfL6xlestlsdCSTxvyHzmepYplAAOV7i/G1tZNFUNpzJ/XrMmbqiWr5knO+o6XBFvO8k0cSbXuL5EXyz6+cr3bR7cLHyynYhwqZZE28iRn7QCkWWNxwA6XII9D7TN47FXGZzA8deX0nYzE3a1uAz69en0lbjsRYW1GWnz9o4q2TKSSIlWoT4nW3HrNLsrZgRQ5B3iM/P/ABKrYmzGqENbIe02Vde7YcJq30ZxW9sTBDueZ94e8j4Z+6R1j9+d2P8AKPOy/t/0MGjhI6tCh5ZA+85XjQYqpAAIj1jSJ2cAH2irOUyLtLadLDqGqNug/dFiSxHICAFgggsQwXP9eUodj9pHxNRlpoFRACS5uxvcCyjIaHiZfUcLc3bM9Zhkzadlyb4cDnu+CPRZme58hLFIJafePlDqJyOTk7Z3qKiqRUbZ2OKw7oAI46Xv4frKYupg3pvZgQBfztPULaSu2psxKgtpz4xktGGXEA6crchYayzwmJU3YEAG/lYg26SNtTYz094jMNkLXlMam6BcEfn/AIN/lBxTFqaNIj2Nr3Gdx/d9LQTYpTvC9xcDPkCMveUy7R1JvewUDTLifb0gN5jcDieHL9e0XjDyEqrieN9W+X6tDbP2e9V727lyenO3z+ckbK2Ez2LgAX0mywmFVAAosMvO0bpcAk3ydh8KqIFUW0v5RHTI8pIPKDccJLNEVQRrm3pznU3ubScid/xgdo4LeVrXGRzUlSPAjSaYszjs+DHNhUt1yOWKpmB2d2vqI27VAdQbb2jADK+WTTabP2lRqi9N1bmBkw8VOYneebRYLDLArCiDGV2K2glPN210AzJ8pM2YprIKihghvbeFibG2g4TCEMTdiSTxJJPrPRPs8xYem9A/eTvL1Rjn6H3EUJJy3OPH8nXPTwuim7XUq9HCvUpMQylbkDMKWAJHr6TyatiXdt52ZzzYlj6mfS+N2cjo6Ot1dSrDowsZ87bd2Q+FrvQfVT3T/MpzVh4j53EuS9HWiw7D7QFLEqGNlqDcPQ3up9cvOewpSsJ8/T2DsP2iGJpfDdv3qABr6uugYfn1nHnh/wBHZ8fJX1ZcunehQkcU70OEnMjrbAbscaV4QJCIsokqsVhd7h9JR4/s+HzAsZtlp84pwqwols8tPZt97Qy3wGxVXVST10m4fBjpAPhx0g7GkiqSnYaQoSSRhwDxM4pAsjWtGlYZhFWnE0Mr3WzAyD2r2kKOGdr99huL/U2V/LXylxiU0M8r7a7W+NW3FN0p5DkW/iP5S8UNUjHLPTEzc032eYQvi+io7N4ZKPmwmcWmx0UnwBPtPWfsr2E6UHrshDVTZbgjuJccebX9BPQjyecy8/7ON8iR01lHtjab4aoFdN5WW4KmzZG2anL5z0fD4TdG9ukmeV9tsf8AHxLkDuoBTW34Sb387+keR0jnzT0K1yQ2p3zyzOY/wDpLbs/tD9nr06hHdBIawNyrZHjnbW3SVfxLaWHDmZxPDhwJy87TmWx4sZOLTXR7nS3HUOpBVgCpGhB4jOZLt72FXGorIQK6AhCTuh1OqMc7DiDbI+MoexvaM4dvh1CTRY/6D/MPw8x5z1WmwIBFiDmCMwQeIm6laPbwZo5Y2uez56xP2X7QW9qG9rbdq0z8iFmbxeAxWCqrvo9GoO8t8ieqkXDDmM59W2lXtzYVDF0zSroGU6cGU81YZgxumbq0eQdnO3lN7JibI+m//A39X8p+XWb0AEAg3BzBGnrPL+2X2cYjB3envVqH8wF3QfjUcPxDLmBKjs72sxGFsoPxKX8jE2A/C2q+GnSc88K5idMM/Uj2r4WU5UtKjs/2uwuJsquEc/wPZWv+E6N5GaB05Tnaa5OhST4GrpOKnOOReE6peIYJhERLx6m8NTSA7Iz0ZCrIZa1VgDSABLEAcSch5waBMrko5zsUyopZ2CqBdiTYAcyTM/t7t5hqN0o/vn/CbID1bj/beeb7Y27icWw+IxIJstNAQt+ACjMnxuZrHC2ZTzxjxuX3aztnv3pYckJo1TQt0UcB1md7O9nq+MqinRW+m85vuoObHnyGpmy7JfZXXrkPit6jS13cviOPD+AeOfQT2XZOx6OGprTo01RBwHE8ydSTzM6owUVsckpyk7Zj8B9mGARFV0d2AzZncXPE7qkATW4HZyUkSnTUKiAKoHACWW5EKS7Ioz/abaX7Nh3qE5/dQWGbnTy4+U8YN2uWOZPG/jeart3toYivuKf3dK4HJm/ib5W8uszbUr2AF+PdN79bcJjOVs8j5WbVKlwiVbrYHgvLziqgz7o8TqPSOAtyHp7xPnIOI4n9dJsuxvaf4RFCsf3Z+4x/h6E/y+3hpjT+v95w6DTU8hBOjTFlljlaPegbx08t7Mdr2oWp1btS4WzZPDmvT05T0rCYpKihkYFToRNouz2sOeOVWufRIImD7V/ZnhcVvPS/cVjnvIO4x/Gmnmtj4zeTozc+Ze0PYnG4Qk1KJZB/5iXdLczbNP7gIDZPa3G4ewp12KD+F7VF8O9mB4ET6hImY212EwGKJZ6Cq51en+7YnmSuTeYMTSfIJtcHmGA+1Rh/4+HVubU23f8Akb/qkn/iqlj/AN2e9zbvrpwv3dZWfaD2DpYBFqJiGfffdWm6jeOVyQ62FgNbjiOcyuxtlms63Kqm9usSbXIUtuLa53iBraw1OQkeKJos0l2bc/alywn/AMn/AOIv/Fdv/SL/AO6f+iVWH2PgkrMWV3pW7oLndva5s6opdb5A3F9c42jsLCql6rLT+K1qReoxO4My1NCi7xNrBnYLfK9yIeOHoPLL2TcT9qNdvuYemv8AUzv7btpncXtXH7QfcvUqnUU6andHiq8OrX8ZT4qkFYBXDggEGxXI6XU6H6z0z7GO0SpUfBvYfEO/SbIHfA71MnjcC48DzEpQiuES5ylyyL2f+yTE1bNinWgn8q2eoemXdX1PhPU+z3Y/B4POjSG/xqP33P8AcdB0FhNFOlEUdEtFg6lQAEkgAZknIAeMBimYnt12oFJTQpG9VgQxH8Cn8z8vSR+0/bgDepYY3bQ1OA57vPx9Oc88cXNySWY94nmTreRKXSPP+T8pJaY/6DVLEepIz87flHLxOR/5T4gCLfMn7vK2l+UW2QyHMf5mZ5hJA6RPOdOiIG26TjmefOdOjGL0va/18JP2Rtith2LU2txdWPdYD+ZTx6jOLOghqTjuj0XY3bLD1rKx+G/EMe7fo2nraaYGLOmyPb+NklOO4s6dOjOk+cPtK7QfteNcqb06V6dPkQp7zj+phryVZTbGw5feQaNYc7kK7WA4nd3xbjvTp0BGrWhuECojNUYDcXdL00LBtxntlWN1zRbgcd890CbB03DV8TWZ+8DQe+bJZGJRDYk7wZTvWVMwN45Dp0QGX23hVRk3G3gVsTa3eQ7ht0ICsOjDjIGHrMjK6MVZSGVhqrKbgjqCIs6MD6V7E9o0x2GWqLB17lZR/DUAzy/lOo6HpNHOnQGZ3bnauhhhYnffgiZm/U6D36TzbbfaSviSQzbiahBkPPmep+U6dMpSZ5Py80tWnopSMtPA9I7e8GAHHLLTLrOnSThGXytci/Dh0McQL5i39POdOiA//9k=",
      },
      {
        id: 2,
        name: "Shane Wright",
        avatarUrl:
          "https://bloximages.chicago2.vip.townnews.com/buffalonews.com/content/tncms/assets/v3/editorial/0/28/028834ee-e385-11ec-83e3-abca9c7e507f/629a7e8a7a2a2.image.jpg",
      },
      {
        id: 3,
        name: "Obi-Wan Kenobi",
        avatarUrl:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F11%2Frevenge-of-the-sith-2000.jpg&q=60",
      },
      {
        id: 4,
        name: "Andrew Garfield",
        avatarUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Andrew_Garfield_by_Gage_Skidmore_%28cropped%29.jpg/1200px-Andrew_Garfield_by_Gage_Skidmore_%28cropped%29.jpg",
      },
    ],
  },

  messengerPage: {
    dialogs: [
      { id: 1, name: "Shane Wright", content: "Привет!" },
      { id: 2, name: "Yuriy Surikat", content: "Canada" },
      { id: 3, name: "Petr Smart", content: "Good day!!!" },
      { id: 4, name: "Igor security", content: "ahahahha" },
      { id: 5, name: "Obi-Wan Kenobi", content: "angree birfs" },
      { id: 6, name: "John Snow", content: "What's up?" },
      { id: 7, name: "Dawson Mercer", content: "Are you sure?" },
    ],
    messages: [
      { id: 1, message: "Houston, State Texas" },
      { id: 2, message: "Seul" },
      { id: 3, message: "Boston, lalala" },
      { id: 4, message: "california, San-Jose" },
      { id: 5, message: "Hi !" },
    ],
  },
};

export default state;
