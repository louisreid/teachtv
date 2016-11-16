/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Video from '../api/video/video.model';

Video.find({}).removeAsync()
  .then(() => {
    Video.createAsync (
      {
        category: 'assessment',
        kind: 'youtube#video',
        etag: '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/UjtGzCtMq3KovtLmlXsOsKAYq7A\"',
        youtubeid: 'Bg7qDczvVx8',
        snippet: {
          publishedAt: '2015-01-23T2:4:48.000Z',
          channelId: 'UCDoXxitLiq5PMruS7AbBJbA',
          title: 'Teach Like A Champion 2.0, Doug Lemov',
          description: 'Best-selling author, Doug Lemov, discusses his new book, Teach Like a Champion 2.0.',
          thumbnails: {
            default: {
              url: 'http://i.ytimg.com/vi/Bg7qDczvVx8/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'http://i.ytimg.com/vi/Bg7qDczvVx8/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'http://i.ytimg.com/vi/Bg7qDczvVx8/hqdefault.jpg',
              width: 480,
              height: 360
            },
            standard: {
              url: 'http://i.ytimg.com/vi/Bg7qDczvVx8/sddefault.jpg',
              width: 640,
              height: 480
            },
            maxres: {
              url: 'http://i.ytimg.com/vi/Bg7qDczvVx8/maxresdefault.jpg',
              width: 1280,
              height: 720
            }
          },
          channelTitle: 'Wiley',
          tags: [
            '4000973766001',
            'ducation',
            '1118901851',
            'Lamov',
            'Teach Like a Champion',
            'teaching techniques',
            'TLAC 2.0',
            '9781118901854',
            'champion teachers',
            'consumer',
            'TLAC',
            'teaching bible',
            'Doug Lemov',
            'youtube',
            'Uncommon schools',
            'classroom management'
          ],
          categoryId: '27',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Teach Like A Champion 2.0, Doug Lemov',
            description: 'Best-selling author, Doug Lemov, discusses his new book, Teach Like a Champion 2.0.'
          }
        },
        statistics: {
          viewCount: 17090,
          likeCount: '18',
          dislikeCount: '1',
          favoriteCount: '0',
          commentCount: '0'
        }
      }, {
        category: 'behaviour',
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/TNauIs3E471V2WOmwECEoMAyEWk\"',
        "youtubeid": "BrjnccFiAfE",
        "snippet": {
          "publishedAt": "2015-07-20T02:40:33.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 1 - No Opt Out",
          "description": "No Opt Out is a useful tool to get all students to the right answer, as often as possible, even if only to repeat the correct answer.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/BrjnccFiAfE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/BrjnccFiAfE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/BrjnccFiAfE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 1 - No Opt Out",
            "description": "No Opt Out is a useful tool to get all students to the right answer, as often as possible, even if only to repeat the correct answer."
          }
        },
        "statistics": {
          "viewCount": 8357,
          "likeCount": "16",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "4"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/vM2qxpgMaICJ1U--x912FSu7DGE\"',
        "youtubeid": "asyV6aSVPE0",
        "snippet": {
          "publishedAt": "2015-07-20T02:44:09.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 2 - Right is Right",
          "description": "Right is Right is a technique teachers can use to set and defend a high standard of correctness by only naming \"right\" those answers which are truly and completely right.\nThis one requires rigor and vigor!\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/asyV6aSVPE0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/asyV6aSVPE0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/asyV6aSVPE0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 2 - Right is Right",
            "description": "Right is Right is a technique teachers can use to set and defend a high standard of correctness by only naming \"right\" those answers which are truly and completely right.\nThis one requires rigor and vigor!\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching"
          }
        },
        "statistics": {
          "viewCount": 5048,
          "likeCount": "10",
          "dislikeCount": "1",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/CsUfp1xWKo2mbk8pdppGAoS4lVc\"',
        "youtubeid": "rZv2Xpea77Q",
        "snippet": {
          "publishedAt": "2015-07-20T02:47:25.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 3 - Stretch It",
          "description": "Stretch It is a technique that helps teachers follow up correct answers with questions that extend knowledge and check fro full understanding.\n\nThis technique challenges students to extend their thinking, and checks that students don't get the correct answer by shear luck.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rZv2Xpea77Q/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rZv2Xpea77Q/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rZv2Xpea77Q/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 3 - Stretch It",
            "description": "Stretch It is a technique that helps teachers follow up correct answers with questions that extend knowledge and check fro full understanding.\n\nThis technique challenges students to extend their thinking, and checks that students don't get the correct answer by shear luck.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching"
          }
        },
        "statistics": {
          "viewCount": 3374,
          "likeCount": "4",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/G0uEmDJSoZw5cpNfm0nC4xd33ME\"',
        "youtubeid": "t984rgJ59JM",
        "snippet": {
          "publishedAt": "2015-07-20T02:50:43.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 4 - Format Matters",
          "description": "Format Matters is a technique to remind teachers that students should respond in complete answers, answer in a loud enough voice, and use correct grammar.\n\nThis technique is front-loaded and intensive, but becomes significantly easier if you stay vigilant and make it part of your classroom mechanics.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/t984rgJ59JM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/t984rgJ59JM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/t984rgJ59JM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 4 - Format Matters",
            "description": "Format Matters is a technique to remind teachers that students should respond in complete answers, answer in a loud enough voice, and use correct grammar.\n\nThis technique is front-loaded and intensive, but becomes significantly easier if you stay vigilant and make it part of your classroom mechanics.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching"
          }
        },
        "statistics": {
          "viewCount": 2222,
          "likeCount": "3",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/NS-tUAWZkkprcxlV-RNlFDM1PXo\"',
        "youtubeid": "w-SJDWlIZu0",
        "snippet": {
          "publishedAt": "2015-07-20T02:49:06.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 5 - Without Apology",
          "description": "Without Apology is the 5th technique and it reminds us that in the hands of a great teacher, no content is boring. We should never lower our students expectations with comments such as, \"I know this is kind of dull\", \"I hate this kind of work, too\" or \"Let's just get through this quickly\".\n\nLet's remember that these comments are sometimes more of a reflection on the teacher than the content.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/w-SJDWlIZu0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/w-SJDWlIZu0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/w-SJDWlIZu0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 5 - Without Apology",
            "description": "Without Apology is the 5th technique and it reminds us that in the hands of a great teacher, no content is boring. We should never lower our students expectations with comments such as, \"I know this is kind of dull\", \"I hate this kind of work, too\" or \"Let's just get through this quickly\".\n\nLet's remember that these comments are sometimes more of a reflection on the teacher than the content.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching"
          }
        },
        "statistics": {
          "viewCount": 1982,
          "likeCount": "3",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/iElwGZ-Rs0XNBfFR0YOOsZ1W90M\"',
        "youtubeid": "c45MypjQxoo",
        "snippet": {
          "publishedAt": "2015-07-20T02:51:14.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 6 - Begin with the End",
          "description": "When I started teaching, I was in survival mode. After finishing a day full of classes and having lunch, I would sit down to plan the next day's lessons and ask, \"What am I going to possibly do tomorrow?\". To me, this seemed like the only possible way to accomplish the monumental task ahead of me. However, after some more seasoning and tenderizing (at the hands of my students and other more experienced teachers), I realized that I was using the wrong recipe to cook up my lessons.\n\nThis is when I was turned on to Technique 6: Being with the End. This technique showed me that by framing an objective first, I could substitute the question, \"What am I going to do tomorrow?\" for, \"What will my students understand tomorrow?\"\n\nBegin with the End is an important technique because it gives real criteria against which you can objectively judge the success of your lessons. Instead of asking, \"Did we finish the activity?\", or \"Did students seem to want to do it or enjoy it?\", we can ask \"Did we reach our learning goal for today?\"\n\nAdopting this technique is the line of demarcation for my movement from the survival stage to mastery stage of teaching.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/c45MypjQxoo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/c45MypjQxoo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/c45MypjQxoo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 6 - Begin with the End",
            "description": "When I started teaching, I was in survival mode. After finishing a day full of classes and having lunch, I would sit down to plan the next day's lessons and ask, \"What am I going to possibly do tomorrow?\". To me, this seemed like the only possible way to accomplish the monumental task ahead of me. However, after some more seasoning and tenderizing (at the hands of my students and other more experienced teachers), I realized that I was using the wrong recipe to cook up my lessons.\n\nThis is when I was turned on to Technique 6: Being with the End. This technique showed me that by framing an objective first, I could substitute the question, \"What am I going to do tomorrow?\" for, \"What will my students understand tomorrow?\"\n\nBegin with the End is an important technique because it gives real criteria against which you can objectively judge the success of your lessons. Instead of asking, \"Did we finish the activity?\", or \"Did students seem to want to do it or enjoy it?\", we can ask \"Did we reach our learning goal for today?\"\n\nAdopting this technique is the line of demarcation for my movement from the survival stage to mastery stage of teaching.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching"
          }
        },
        "statistics": {
          "viewCount": 3963,
          "likeCount": "14",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "8"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/bVJsA1pX-Zsr4JNQnKJlDS3uJw4\"',
        "youtubeid": "2dP5lGmO8UU",
        "snippet": {
          "publishedAt": "2015-07-20T02:50:58.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 7 - 4Ms",
          "description": "Building off of Technique 6; Technique 7: 4Ms, tells us that a great lesson objective should be manageable, measurable, made first, and most important on the path to mastery.\n\nThe practice of building great lessons, particularly at the beginning, is never exciting. To persist past these moments you have to be excited by the prospect of discovering or inventing something new. \n\nDo not consider lesson planning a waste of time. Even the most menial tasks will teach you lessons and develop skills you can use to your advantage later on.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2dP5lGmO8UU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2dP5lGmO8UU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2dP5lGmO8UU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 7 - 4Ms",
            "description": "Building off of Technique 6; Technique 7: 4Ms, tells us that a great lesson objective should be manageable, measurable, made first, and most important on the path to mastery.\n\nThe practice of building great lessons, particularly at the beginning, is never exciting. To persist past these moments you have to be excited by the prospect of discovering or inventing something new. \n\nDo not consider lesson planning a waste of time. Even the most menial tasks will teach you lessons and develop skills you can use to your advantage later on.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching"
          }
        },
        "statistics": {
          "viewCount": 1898,
          "likeCount": "3",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/Bj0gLEGS-J0sU1olV1XhDeUFsvI\"',
        "youtubeid": "LjrU50EKtjc",
        "snippet": {
          "publishedAt": "2015-07-20T02:50:25.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 8 - Post It",
          "description": "Post It is a simple reminder to display your lesson's learning objective in your classroom. It used to be something I saw as silly and a waste of time. However, since developing the habit, I have seen an improvement of my ability to focus, and when necessary redirect my focus, on the learning objective of the day's lesson.\n\nTeaching the same lesson repeatedly throughout the day can be draining, both physically and mentally, and teachers need to be conscious of what they aim to accomplish by the end of class.\n\nThis technique serves as a reminder as well as a refresher.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LjrU50EKtjc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LjrU50EKtjc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LjrU50EKtjc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 8 - Post It",
            "description": "Post It is a simple reminder to display your lesson's learning objective in your classroom. It used to be something I saw as silly and a waste of time. However, since developing the habit, I have seen an improvement of my ability to focus, and when necessary redirect my focus, on the learning objective of the day's lesson.\n\nTeaching the same lesson repeatedly throughout the day can be draining, both physically and mentally, and teachers need to be conscious of what they aim to accomplish by the end of class.\n\nThis technique serves as a reminder as well as a refresher.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching"
          }
        },
        "statistics": {
          "viewCount": 1521,
          "likeCount": "2",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "4"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/7xYBcUwU3VQUW0xXeb3wJ88bcNQ\"',
        "youtubeid": "pfKDOMfHP8g",
        "snippet": {
          "publishedAt": "2015-07-20T02:51:59.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 9 - Shortest Path",
          "description": "Take the Shortest Path to your objectives in designing activities. A common flaw I regularly made in the past was to try execute a really intricate activity or to try and do too much during a class; I had just too much packed into the allocated time.\n\nThe criterion is MASTERY of the objective and what gets you there best and fastest.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pfKDOMfHP8g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pfKDOMfHP8g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pfKDOMfHP8g/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 9 - Shortest Path",
            "description": "Take the Shortest Path to your objectives in designing activities. A common flaw I regularly made in the past was to try execute a really intricate activity or to try and do too much during a class; I had just too much packed into the allocated time.\n\nThe criterion is MASTERY of the objective and what gets you there best and fastest.\n\nIf you enjoyed this video, follow me at: https://www.facebook.com/kaizenteaching"
          }
        },
        "statistics": {
          "viewCount": 1100,
          "likeCount": "1",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/AQmMJumjqS1OyOMW24Psz2jV3oY\"',
        "youtubeid": "j0w6gK-cRmU",
        "snippet": {
          "publishedAt": "2015-07-21T04:54:17.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 10 - Double Plan",
          "description": "Technique 10 is the Double Plan. Most lesson plans have a Teacher section and a Student section. We outline a basic idea of what we will do and what students will do. Double Plan asks you to give more thought and focus on what students will do, to think about the specifics of activities, possible problems that may arise, and how they can be dealt with.\nThe BIG idea is to think more deeply about how the student will see and interact with the teacher and material during class. Practicing the Double Plan is an excellent habit to form and will help you establish a routine that helps you understand your students' perspective and any potential flaws in your activities.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/j0w6gK-cRmU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/j0w6gK-cRmU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/j0w6gK-cRmU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 10 - Double Plan",
            "description": "Technique 10 is the Double Plan. Most lesson plans have a Teacher section and a Student section. We outline a basic idea of what we will do and what students will do. Double Plan asks you to give more thought and focus on what students will do, to think about the specifics of activities, possible problems that may arise, and how they can be dealt with.\nThe BIG idea is to think more deeply about how the student will see and interact with the teacher and material during class. Practicing the Double Plan is an excellent habit to form and will help you establish a routine that helps you understand your students' perspective and any potential flaws in your activities."
          }
        },
        "statistics": {
          "viewCount": 1572,
          "likeCount": "3",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/CYw98kgtlOWBKXIovuvPN5rw8NA\"',
        "youtubeid": "cxYjboGVwaQ",
        "snippet": {
          "publishedAt": "2015-07-22T01:57:54.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 11 - Draw the Map",
          "description": "Technique 11 focuses on the \"how\" you study, an aspect of lesson planning that can often be overlooked. When you plan, make sure that the physical environment you will be using is able to support the learning objectives of your activities. \n\nAs a traveling teacher, this task sometimes seems impossible. Moving from one class to another, I am constantly presented with classroom layouts that the homeroom teacher prefers or seating arrangements that were optimized for the lesson before mine. \n\nIt is important to take time and plan the physical layout of students and desks in the classroom (as well as the time needed to carry out the movement of students and desks into this layout), into your lesson; then, as carefully, quietly, and calmly as possible implement it.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cxYjboGVwaQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cxYjboGVwaQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cxYjboGVwaQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 11 - Draw the Map",
            "description": "Technique 11 focuses on the \"how\" you study, an aspect of lesson planning that can often be overlooked. When you plan, make sure that the physical environment you will be using is able to support the learning objectives of your activities. \n\nAs a traveling teacher, this task sometimes seems impossible. Moving from one class to another, I am constantly presented with classroom layouts that the homeroom teacher prefers or seating arrangements that were optimized for the lesson before mine. \n\nIt is important to take time and plan the physical layout of students and desks in the classroom (as well as the time needed to carry out the movement of students and desks into this layout), into your lesson; then, as carefully, quietly, and calmly as possible implement it."
          }
        },
        "statistics": {
          "viewCount": 1072,
          "likeCount": "2",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/bVSjS9w8VOrVwmUHZemxZ6oE_HE\"',
        "youtubeid": "cArUHPZjilc",
        "snippet": {
          "publishedAt": "2015-07-23T05:00:27.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 12 - The Hook",
          "description": "The \"hook\" is also referred to as the \"anticipatory set\" in educational circles, but \"hook\" is a good vernacular way of expressing \"anticipatory set.\"  It's the thing that grabs, or \"hooks\" your attention and helps to focus you on the topic at hand.\n\nEinstein said, \"curiosity is its own reason\", give students a reason to be curious about the topic and they will find all the motivation they need to excel, on their own.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cArUHPZjilc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cArUHPZjilc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cArUHPZjilc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 12 - The Hook",
            "description": "The \"hook\" is also referred to as the \"anticipatory set\" in educational circles, but \"hook\" is a good vernacular way of expressing \"anticipatory set.\"  It's the thing that grabs, or \"hooks\" your attention and helps to focus you on the topic at hand.\n\nEinstein said, \"curiosity is its own reason\", give students a reason to be curious about the topic and they will find all the motivation they need to excel, on their own."
          }
        },
        "statistics": {
          "viewCount": 1995,
          "likeCount": "3",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/YRMOln0NKx05IUPgRX4NLNGzKxo\"',
        "youtubeid": "hM4z74QJQN0",
        "snippet": {
          "publishedAt": "2015-07-26T13:11:03.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 13 - Name the Steps",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hM4z74QJQN0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hM4z74QJQN0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hM4z74QJQN0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 13 - Name the Steps",
            "description": ""
          }
        },
        "statistics": {
          "viewCount": 1431,
          "likeCount": "1",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/rIYHBXtgyZ6E2jGqxeJF4bdCR6A\"',
        "youtubeid": "e3IHlPqsGv8",
        "snippet": {
          "publishedAt": "2015-07-29T05:57:00.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 14 - Board Equals Paper",
          "description": "We don't change our minds much in life. The skills we learn in school (good or bad) are often carried with us into adulthood. Start your students on the right path to note taking, it is a skill they will use forever. Learning this routine strengthens them in that they are able to take notes automatically and focus their attention on the content and insight of the teacher.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/e3IHlPqsGv8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/e3IHlPqsGv8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/e3IHlPqsGv8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 14 - Board Equals Paper",
            "description": "We don't change our minds much in life. The skills we learn in school (good or bad) are often carried with us into adulthood. Start your students on the right path to note taking, it is a skill they will use forever. Learning this routine strengthens them in that they are able to take notes automatically and focus their attention on the content and insight of the teacher."
          }
        },
        "statistics": {
          "viewCount": 938,
          "likeCount": "1",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/tpOtB3WZlmJvHa1oLLbp79jxMbI\"',
        "youtubeid": "Nmm3XbVs084",
        "snippet": {
          "publishedAt": "2015-07-30T03:58:12.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 15 - Circulate",
          "description": "Technique 15: Circulate, teaches us that like an oven, a teacher works best when circulating. Just as an oven that circulates air cooks food quickly and evenly, a teacher who circulates will be able to keep students focused on the lesson and move quickly through content at the same time as interacting evenly with students.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Nmm3XbVs084/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Nmm3XbVs084/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Nmm3XbVs084/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 15 - Circulate",
            "description": "Technique 15: Circulate, teaches us that like an oven, a teacher works best when circulating. Just as an oven that circulates air cooks food quickly and evenly, a teacher who circulates will be able to keep students focused on the lesson and move quickly through content at the same time as interacting evenly with students."
          }
        },
        "statistics": {
          "viewCount": 1333,
          "likeCount": "1",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/U3i1sAJ2zSsQJ0b6trvPOwU-__E\"',
        "youtubeid": "dV12xViyBMU",
        "snippet": {
          "publishedAt": "2015-08-01T09:55:03.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 16 - Break it Down",
          "description": "Technique 16 Break it Down is one of the hardest things I've had to master as a teacher, but by far the most useful. This technique shows how to break down a question, when a student struggles to answer, to a more base level and build the knowledge back up to a level that makes the question understandable.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/dV12xViyBMU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/dV12xViyBMU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/dV12xViyBMU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 16 - Break it Down",
            "description": "Technique 16 Break it Down is one of the hardest things I've had to master as a teacher, but by far the most useful. This technique shows how to break down a question, when a student struggles to answer, to a more base level and build the knowledge back up to a level that makes the question understandable."
          }
        },
        "statistics": {
          "viewCount": 1393,
          "likeCount": "3",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "5"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/eyl9cdBGiaSelgy2cZeUxC9L2ds\"',
        "youtubeid": "bxgmfSOsW2k",
        "snippet": {
          "publishedAt": "2015-08-04T05:48:37.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 17 - Ratio",
          "description": "The desire for what is simple and easy infects all of us, often in ways we are mostly unaware of. The only solution is the following: We must learn how to quiet the anxiety we feel whenever we are confronted with anything that seems complex or chaotic. We must patiently learn the various parts and skills that are required, never looking too far ahead.\n\nTechnique 17, Ratio, explains the process of releasing cognitive work to students with vigilant discipline to ensure that the work is focused and productive. You don't want students to be working inefficiently (work they don't understand, or need more assistance to master), which precludes them from useful cognitive work.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/bxgmfSOsW2k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/bxgmfSOsW2k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/bxgmfSOsW2k/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 17 - Ratio",
            "description": "The desire for what is simple and easy infects all of us, often in ways we are mostly unaware of. The only solution is the following: We must learn how to quiet the anxiety we feel whenever we are confronted with anything that seems complex or chaotic. We must patiently learn the various parts and skills that are required, never looking too far ahead.\n\nTechnique 17, Ratio, explains the process of releasing cognitive work to students with vigilant discipline to ensure that the work is focused and productive. You don't want students to be working inefficiently (work they don't understand, or need more assistance to master), which precludes them from useful cognitive work."
          }
        },
        "statistics": {
          "viewCount": 1362,
          "likeCount": "6",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "2"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/udc4flM_D3LqKIvAETqAPT9har8\"',
        "youtubeid": "4eiuM7PKTPs",
        "snippet": {
          "publishedAt": "2015-08-04T05:40:04.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 18 - Check for Understanding Part 1",
          "description": "Technique 18 is about effectively checking for understanding. This technique teaches us how to gather data constantly and act on the data quickly. We should be seeking constant opportunities to assess what our students can do while we’re teaching and using that knowledge to inform what you do and how you do it. \n\nIt is easy to look at what happens in our classrooms through a descriptive lens; however, seeing students answers as data allows us to look at their responses neutrally, through an analytical framework, to assess answers, without allowing our own narrative of why they are correct or incorrect to cloud our judgement of what is happening.\n\nPart 1 is about Gathering Data.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4eiuM7PKTPs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4eiuM7PKTPs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4eiuM7PKTPs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching",
            "Teach Like A Champion: 49 Techniques That Put Students On The Path To College (K-12)"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 18 - Check for Understanding Part 1",
            "description": "Technique 18 is about effectively checking for understanding. This technique teaches us how to gather data constantly and act on the data quickly. We should be seeking constant opportunities to assess what our students can do while we’re teaching and using that knowledge to inform what you do and how you do it. \n\nIt is easy to look at what happens in our classrooms through a descriptive lens; however, seeing students answers as data allows us to look at their responses neutrally, through an analytical framework, to assess answers, without allowing our own narrative of why they are correct or incorrect to cloud our judgement of what is happening.\n\nPart 1 is about Gathering Data."
          }
        },
        "statistics": {
          "viewCount": 1706,
          "likeCount": "2",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/NPKGUv9Xvjx0S-IxWToOErRAafI\"',
        "youtubeid": "N_IYj5WfQC8",
        "snippet": {
          "publishedAt": "2015-08-04T06:48:27.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 18 - Check for Understanding Part 2",
          "description": "Technique 18 Part 2\n\nDon't become frustrated if this technique does not come easily. Responding to the data we collect will not be simple to do at first, but over time it will become so ingrained in us, as to become second nature, intuitive. \n\n“Faithfully pursuing a course over enough time, we will eventually be rewarded with intuitive powers. That whole living, breathing, changing beast that is our field will become internalized and live within us. Possessing even a part of such power will instantly separate us from all of the others who find themselves overwhelmed and straining to simplify what is inherently complex. We will be able to respond faster and more effectively than others. What seemed chaotic to us before will now seem to be simply a fluid situation with a particular dynamic that we have a feel for and can handle with relative ease.”\n\nRobert, Greene. “Mastery\"",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/N_IYj5WfQC8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/N_IYj5WfQC8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/N_IYj5WfQC8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 18 - Check for Understanding Part 2",
            "description": "Technique 18 Part 2\n\nDon't become frustrated if this technique does not come easily. Responding to the data we collect will not be simple to do at first, but over time it will become so ingrained in us, as to become second nature, intuitive. \n\n“Faithfully pursuing a course over enough time, we will eventually be rewarded with intuitive powers. That whole living, breathing, changing beast that is our field will become internalized and live within us. Possessing even a part of such power will instantly separate us from all of the others who find themselves overwhelmed and straining to simplify what is inherently complex. We will be able to respond faster and more effectively than others. What seemed chaotic to us before will now seem to be simply a fluid situation with a particular dynamic that we have a feel for and can handle with relative ease.”\n\nRobert, Greene. “Mastery\""
          }
        },
        "statistics": {
          "viewCount": 916,
          "likeCount": "0",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/MjYqlvTovxAEE9dCgV-ODgq8uxI\"',
        "youtubeid": "mtjRcf0UTZY",
        "snippet": {
          "publishedAt": "2015-08-07T12:42:25.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 19 - At Bats",
          "description": "Technique 21: Take a Stand, asks students to actively make judgement about their peers' answers. This technique allows the teacher to assess the students' understanding (through questioning how and why they have come to their conclusion) and thereby pinpoint the strengths and weaknesses of their instruction.\n\nWhen you begin to implement this technique, you will have to think about all of the various steps and actions involved, things may feel awkward at first. Rest assured, with repetition and practice, you (and the participating students) will quickly begin to function almost automatically.\n\nNever forget, when you make one classroom skill automatic, you and your students are freed up to focus on a higher one.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mtjRcf0UTZY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mtjRcf0UTZY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mtjRcf0UTZY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/mtjRcf0UTZY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/mtjRcf0UTZY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 19 - At Bats",
            "description": "Technique 21: Take a Stand, asks students to actively make judgement about their peers' answers. This technique allows the teacher to assess the students' understanding (through questioning how and why they have come to their conclusion) and thereby pinpoint the strengths and weaknesses of their instruction.\n\nWhen you begin to implement this technique, you will have to think about all of the various steps and actions involved, things may feel awkward at first. Rest assured, with repetition and practice, you (and the participating students) will quickly begin to function almost automatically.\n\nNever forget, when you make one classroom skill automatic, you and your students are freed up to focus on a higher one."
          }
        },
        "statistics": {
          "viewCount": 680,
          "likeCount": "0",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/mzQO8o3HIB89TPPaksUQJRswVew\"',
        "youtubeid": "NtaTMMo8J2o",
        "snippet": {
          "publishedAt": "2015-08-06T05:32:58.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 20 - Exit Tickets",
          "description": "I LOVE this technique. \n\nProcedures lay the groundwork for student learning. A procedure is simply a method or process for\ngetting things done in the classroom. Procedures teach students responsible skills they can use in school and in life. Technique 20, Exit Ticket, is both a fantastic classroom procedure & life skill. This technique describes the procedure for dismissal at the end of the period or day. It involves students lining up at the door in an orderly fashion, and the teacher asking one or a series of simple short questions before students leave.\n\nThis technique accomplishes two things at once. First, it allows teacher to gather important information about student understanding, which provides critical insight and helps in designing the next day's lesson. Second, it trains students to line up quietly at the back of the classroom and prepare for dismissal by the teacher, only after the teacher has check the classroom (chair pushed in, papers cleaned up...etc), and not the bell.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/NtaTMMo8J2o/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/NtaTMMo8J2o/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/NtaTMMo8J2o/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 20 - Exit Tickets",
            "description": "I LOVE this technique. \n\nProcedures lay the groundwork for student learning. A procedure is simply a method or process for\ngetting things done in the classroom. Procedures teach students responsible skills they can use in school and in life. Technique 20, Exit Ticket, is both a fantastic classroom procedure & life skill. This technique describes the procedure for dismissal at the end of the period or day. It involves students lining up at the door in an orderly fashion, and the teacher asking one or a series of simple short questions before students leave.\n\nThis technique accomplishes two things at once. First, it allows teacher to gather important information about student understanding, which provides critical insight and helps in designing the next day's lesson. Second, it trains students to line up quietly at the back of the classroom and prepare for dismissal by the teacher, only after the teacher has check the classroom (chair pushed in, papers cleaned up...etc), and not the bell."
          }
        },
        "statistics": {
          "viewCount": 1809,
          "likeCount": "5",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/JRJ2AUj0hRhSXoeU2hW33HfFtnc\"',
        "youtubeid": "i0dCwNT7JZc",
        "snippet": {
          "publishedAt": "2015-08-07T12:47:45.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 21 - Take a Stand",
          "description": "Technique 21: Take a Stand, asks students to actively make judgement about their peers' answers. This technique allows the teacher to assess the students' understanding (through questioning how and why they have come to their conclusion) and thereby pinpoint the strengths and weaknesses of their instruction.\n\nWhen you begin to implement this technique, you will have to think about all of the various steps and actions involved, things may feel awkward at first. Rest assured, with repetition and practice, you (and the participating students) will quickly begin to function almost automatically.\n\nNever forget, when you make one classroom skill automatic, you and your students are freed up to focus on a higher one.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/i0dCwNT7JZc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/i0dCwNT7JZc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/i0dCwNT7JZc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 21 - Take a Stand",
            "description": "Technique 21: Take a Stand, asks students to actively make judgement about their peers' answers. This technique allows the teacher to assess the students' understanding (through questioning how and why they have come to their conclusion) and thereby pinpoint the strengths and weaknesses of their instruction.\n\nWhen you begin to implement this technique, you will have to think about all of the various steps and actions involved, things may feel awkward at first. Rest assured, with repetition and practice, you (and the participating students) will quickly begin to function almost automatically.\n\nNever forget, when you make one classroom skill automatic, you and your students are freed up to focus on a higher one."
          }
        },
        "statistics": {
          "viewCount": 747,
          "likeCount": "1",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/ksguZSDU08SygV-Nz34PgH-VyQo\"',
        "youtubeid": "UEOx5dQuEJg",
        "snippet": {
          "publishedAt": "2015-08-10T07:01:23.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 22 - Cold Call",
          "description": "Technique 22 , Cold Call helps teachers become successful in student engagement. Teacher must be cognizant to the true needs of those entrusted to their care. Do not think that engaging students is for the sake of engagement (i.e. entertainment), think of it as a way to keep them focused on the work, the learning. \n\nLearning has nothing to do with what the teacher covers. Learning has to do with what the student is able to accomplish, learn, or master. Learning occurs only when the students demonstrate accomplishment. Cold Call will help you understand where your students stand on the road to MASTERY.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/UEOx5dQuEJg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/UEOx5dQuEJg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/UEOx5dQuEJg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teach Like A Champion: 49 Techniques That Put Students On The Path To College (K-12)",
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 22 - Cold Call",
            "description": "Technique 22 , Cold Call helps teachers become successful in student engagement. Teacher must be cognizant to the true needs of those entrusted to their care. Do not think that engaging students is for the sake of engagement (i.e. entertainment), think of it as a way to keep them focused on the work, the learning. \n\nLearning has nothing to do with what the teacher covers. Learning has to do with what the student is able to accomplish, learn, or master. Learning occurs only when the students demonstrate accomplishment. Cold Call will help you understand where your students stand on the road to MASTERY."
          }
        },
        "statistics": {
          "viewCount": 1070,
          "likeCount": "0",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/qLeLU6nRIGgB5IhRmNl12RTonY8\"',
        "youtubeid": "hzYPYNeExpc",
        "snippet": {
          "publishedAt": "2015-08-11T06:40:03.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 23 - Call and Response",
          "description": "Practice make permanent. Does it also make perfect, in your classroom?\n\nThe key idea of Technique 23, Call & Response, is to use group choral response - you ask; they answer in unison--to build a culture of energetic, positive engagement. \n\nNot only does this technique help build a classroom attitude of engagement and compliance; the technique, once it has become a classroom procedure (an automatic response) through repetition, students are freed up to think more creatively about the answers they give because there is an expectation of participation.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hzYPYNeExpc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hzYPYNeExpc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hzYPYNeExpc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teach Like A Champion: 49 Techniques That Put Students On The Path To College (K-12)",
            "Teach Like a Champion",
            "Call and Response",
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 23 - Call and Response",
            "description": "Practice make permanent. Does it also make perfect, in your classroom?\n\nThe key idea of Technique 23, Call & Response, is to use group choral response - you ask; they answer in unison--to build a culture of energetic, positive engagement. \n\nNot only does this technique help build a classroom attitude of engagement and compliance; the technique, once it has become a classroom procedure (an automatic response) through repetition, students are freed up to think more creatively about the answers they give because there is an expectation of participation."
          }
        },
        "statistics": {
          "viewCount": 1764,
          "likeCount": "0",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/tTRpSrhSKb4f6P-Yzf760PrcKvA\"',
        "youtubeid": "7MoG18kBfH0",
        "snippet": {
          "publishedAt": "2015-08-12T07:06:13.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 24 - Pepper",
          "description": "Technique 24, Pepper, is an informal training technique modeled after the baseball warm-up of the same name. \n\nThis technique is intended to review and reinforce familiar information and foundation skills, not teach new info or skills. \n\nPepper is a back-and-forth Q&A between the teacher and students. Just as in the baseball activity, you never know who is getting the \"ball\" in classroom Pepper. Pepper is a fast-paced, unpredictable review with lots of chances for participation in rapid succession.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7MoG18kBfH0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7MoG18kBfH0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7MoG18kBfH0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teach Like A Champion: 49 Techniques That Put Students On The Path To College (K-12)",
            "pepper",
            "Teaching",
            "Kaizen",
            "teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 24 - Pepper",
            "description": "Technique 24, Pepper, is an informal training technique modeled after the baseball warm-up of the same name. \n\nThis technique is intended to review and reinforce familiar information and foundation skills, not teach new info or skills. \n\nPepper is a back-and-forth Q&A between the teacher and students. Just as in the baseball activity, you never know who is getting the \"ball\" in classroom Pepper. Pepper is a fast-paced, unpredictable review with lots of chances for participation in rapid succession."
          }
        },
        "statistics": {
          "viewCount": 662,
          "likeCount": "1",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/I7RRm-hiBAO34U26SsRkFde-FUc\"',
        "youtubeid": "lecW6Ie9dVo",
        "snippet": {
          "publishedAt": "2015-08-13T06:43:47.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 25 - Wait Time",
          "description": "Technique 25, Wait Time, is a way of delaying a few strategic seconds after you finish asking a question and before you ask a student to begin answering it. \n\nI tend to call on a participant far too quickly instead of scanning the room and giving lots of people time to raise a hand. I have been trying to give students a few more seconds to do the cognitive work necessary to arrive at the types of answers I am looking for (the best ones) and not the first ones that pop into their mind.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lecW6Ie9dVo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lecW6Ie9dVo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lecW6Ie9dVo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 25 - Wait Time",
            "description": "Technique 25, Wait Time, is a way of delaying a few strategic seconds after you finish asking a question and before you ask a student to begin answering it. \n\nI tend to call on a participant far too quickly instead of scanning the room and giving lots of people time to raise a hand. I have been trying to give students a few more seconds to do the cognitive work necessary to arrive at the types of answers I am looking for (the best ones) and not the first ones that pop into their mind."
          }
        },
        "statistics": {
          "viewCount": 1361,
          "likeCount": "2",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/3hMDGyjjC97_rA5Kb_aWYB8ldo0\"',
        "youtubeid": "LfMXgK0ZVm8",
        "snippet": {
          "publishedAt": "2015-08-17T09:11:55.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 26 - Everybody Writes",
          "description": "To answer in a classroom or otherwise, I have to consider what it would take for me to answer the teacher’s question. The answer is that I would need a minute, even half a minute, to think and, more important, to write: to jot down my thoughts and wrestle them into words. With time to reflect and begin turning thoughts into words, I’d have the best chance of being ready to participate and, ideally, at some level of depth, because my ideas would be better and I would be more confident in them. Set your students up for rigorous engagement by giving them the opportunity to reflect first in writing before discussing. We write to know what we think.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LfMXgK0ZVm8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LfMXgK0ZVm8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LfMXgK0ZVm8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 26 - Everybody Writes",
            "description": "To answer in a classroom or otherwise, I have to consider what it would take for me to answer the teacher’s question. The answer is that I would need a minute, even half a minute, to think and, more important, to write: to jot down my thoughts and wrestle them into words. With time to reflect and begin turning thoughts into words, I’d have the best chance of being ready to participate and, ideally, at some level of depth, because my ideas would be better and I would be more confident in them. Set your students up for rigorous engagement by giving them the opportunity to reflect first in writing before discussing. We write to know what we think."
          }
        },
        "statistics": {
          "viewCount": 805,
          "likeCount": "2",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "2"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/6NYOxFD055Ej7Rz3E6UKyswmDJc\"',
        "youtubeid": "wK2ntUSlEUI",
        "snippet": {
          "publishedAt": "2015-08-19T02:58:43.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 27 - Vegas",
          "description": "The “Vegas” strategy is a technique that adds a little bit of “umph” to a day’s lesson. However, its soul purpose is not just for sparkle or laughs, it is used to reinforce a learning objective of that day. Vegas can be a when students act out an action verb they just learned, singing the long division song, or having charades to see who best acts out they day’s vocabulary word. These are just a few examples, but they are perfect illustrations of how a little bit of “production” in the classroom and can go a long way in terms of reinforcing material and hitting a concept home. This strategy allows students to engage and physically relate the material they are learning to themselves and the world around them.\nThis type of learning strategy asks students to take it beyond the pages and become physically, visually, even verbally connected to the subject. Vegas is also connected to retrieval and factors that affect it. There are multiple factors that affect retrieval and the Vegas strategy touches on a few of these. First, there is distinctiveness. This technique presents information in a way that is distinct and memorable, therefore making retrieval easier. It is also related to multiple connections with existing knowledge. The Vegas strategy gets students to create their own connection through visual kinesthetic activities that relate to the subject matter in some way. The more connections a student can establish, the more likely they will be able to retrieve the learned information.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/wK2ntUSlEUI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/wK2ntUSlEUI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/wK2ntUSlEUI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/wK2ntUSlEUI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/wK2ntUSlEUI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Konglish",
            "Minute",
            "Korean",
            "English",
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 27 - Vegas",
            "description": "The “Vegas” strategy is a technique that adds a little bit of “umph” to a day’s lesson. However, its soul purpose is not just for sparkle or laughs, it is used to reinforce a learning objective of that day. Vegas can be a when students act out an action verb they just learned, singing the long division song, or having charades to see who best acts out they day’s vocabulary word. These are just a few examples, but they are perfect illustrations of how a little bit of “production” in the classroom and can go a long way in terms of reinforcing material and hitting a concept home. This strategy allows students to engage and physically relate the material they are learning to themselves and the world around them.\nThis type of learning strategy asks students to take it beyond the pages and become physically, visually, even verbally connected to the subject. Vegas is also connected to retrieval and factors that affect it. There are multiple factors that affect retrieval and the Vegas strategy touches on a few of these. First, there is distinctiveness. This technique presents information in a way that is distinct and memorable, therefore making retrieval easier. It is also related to multiple connections with existing knowledge. The Vegas strategy gets students to create their own connection through visual kinesthetic activities that relate to the subject matter in some way. The more connections a student can establish, the more likely they will be able to retrieve the learned information."
          }
        },
        "statistics": {
          "viewCount": 767,
          "likeCount": "2",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/bAZlSNEjG7zTXTsUKTjFS1W0MQU\"',
        "youtubeid": "zw6m3-fnahw",
        "snippet": {
          "publishedAt": "2015-08-27T06:25:04.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 28 - Entry Routine",
          "description": "This technique addresses a small job, but it is the first job a teacher must complete at the beginning of each day or class, and it sets students off in the right directions from the moment they enter your classroom.\n\"Don't be afraid to give your best to what seemingly are small jobs. Every time you conquer one it makes you that much stronger. If you do the little jobs well, the big ones will tend to take care of themselves.\" - Dale Carnegie",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/zw6m3-fnahw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/zw6m3-fnahw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/zw6m3-fnahw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 28 - Entry Routine",
            "description": "This technique addresses a small job, but it is the first job a teacher must complete at the beginning of each day or class, and it sets students off in the right directions from the moment they enter your classroom.\n\"Don't be afraid to give your best to what seemingly are small jobs. Every time you conquer one it makes you that much stronger. If you do the little jobs well, the big ones will tend to take care of themselves.\" - Dale Carnegie"
          }
        },
        "statistics": {
          "viewCount": 2033,
          "likeCount": "2",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/OAg6EEa6Poyy6hraoegu_a6KP3U\"',
        "youtubeid": "PEz07gZ6zPk",
        "snippet": {
          "publishedAt": "2015-08-28T06:17:43.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 29 - Do Now",
          "description": "A teacher's job is to build people. When we can create an environment where people get results, develop new skills, and become successful, we are fulfilling our highest calling as a teacher and leader of young people. Communicating with strength and sensitivity, being a coach, and building people are a teacher's highest priority.\n\nNo matter what we do there will always be the challenges with negative students and performance. Our results, and the results of our students, depend on how those situations are handled. Fairness, consistency and strength are required in the right places, at the right times and in the right way. Without this, the classroom culture and morale can grind to a halt for everyone, effecting student productivity and engagement.\n\nTechnique 29 Do Now provides a way for students to be productive right away, can be done independently, and is done in writing (which holds them accountable); all tasks that are necessary to help build better students and people.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PEz07gZ6zPk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PEz07gZ6zPk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PEz07gZ6zPk/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 29 - Do Now",
            "description": "A teacher's job is to build people. When we can create an environment where people get results, develop new skills, and become successful, we are fulfilling our highest calling as a teacher and leader of young people. Communicating with strength and sensitivity, being a coach, and building people are a teacher's highest priority.\n\nNo matter what we do there will always be the challenges with negative students and performance. Our results, and the results of our students, depend on how those situations are handled. Fairness, consistency and strength are required in the right places, at the right times and in the right way. Without this, the classroom culture and morale can grind to a halt for everyone, effecting student productivity and engagement.\n\nTechnique 29 Do Now provides a way for students to be productive right away, can be done independently, and is done in writing (which holds them accountable); all tasks that are necessary to help build better students and people."
          }
        },
        "statistics": {
          "viewCount": 1522,
          "likeCount": "5",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/0W0duV_-MDIDo1xq5bEuul-oGVg\"',
        "youtubeid": "o2KOnHRPd5g",
        "snippet": {
          "publishedAt": "2015-08-31T07:39:34.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 30 - Tight Transitions",
          "description": "Students spend a tremendous amount of time on transitions – moving from place to place or activity to activity -- and this is time that they are not learning. Teachers should make sure that students learn, practice, and master procedures – like how to line up, walk from class-to-class, or pass out papers. \n\nTo do this, teachers must break down procedures and map out the one right way to do them. One effective way to do this is to scaffold the transitions, teaching procedures step-by-step. It may seem like a waste of time or something for their homeroom teachers to do, but it is an investment and one that can pay off for months or years to come, depending on how long you teach. \n\nI have an entire school's worth of students (800ish) who can be settled down just by calling out a few letters because I have invested the time in teaching and re-teaching my transition prompts.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/o2KOnHRPd5g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/o2KOnHRPd5g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/o2KOnHRPd5g/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen",
            "Higher Education (Industry)",
            "Teach Like A Champion 2.0",
            "transitions",
            "Classroom",
            "technique 30",
            "school",
            "tight transitions",
            "technique"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 30 - Tight Transitions",
            "description": "Students spend a tremendous amount of time on transitions – moving from place to place or activity to activity -- and this is time that they are not learning. Teachers should make sure that students learn, practice, and master procedures – like how to line up, walk from class-to-class, or pass out papers. \n\nTo do this, teachers must break down procedures and map out the one right way to do them. One effective way to do this is to scaffold the transitions, teaching procedures step-by-step. It may seem like a waste of time or something for their homeroom teachers to do, but it is an investment and one that can pay off for months or years to come, depending on how long you teach. \n\nI have an entire school's worth of students (800ish) who can be settled down just by calling out a few letters because I have invested the time in teaching and re-teaching my transition prompts."
          }
        },
        "statistics": {
          "viewCount": 4829,
          "likeCount": "10",
          "dislikeCount": "1",
          "favoriteCount": "0",
          "commentCount": "2"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/M0oXSKA2sJ0wI_04-9G_vRnBog4\"',
        "youtubeid": "I-MwP6js30c",
        "snippet": {
          "publishedAt": "2015-09-01T07:15:20.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion 31 - Control Binders",
          "description": "If it was worth doing, it is worth keeping. Students work hard at completing assignments and projects in school; however, often, these are seen only by the teacher, graded and returned to the student. Sometimes, the work was posted on a classroom wall or in a school hallway. Many teachers kept portfolios of student work for report card conferences, and the rare teacher taught students how to build their own portfolios from their work. What a joy it would be if students felt their work was something more than a piece of paper to be put in a big blue bin at the end of the year. \n\nIt is possible for digital portfolios to be truly valuable to both teachers and students, by providing insight into not only what students created, but also how and why. Teachers should understand that by capturing student learning progress and performance in the moment we are able to tap in to the true power of portfolios, which lies in revisiting the materials.\n\nBy requiring a binder your students will have an organized system to store, organize, and recall what they’ve learned. This video technique will help you understand my favorite way for keeping track of students materials.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/I-MwP6js30c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/I-MwP6js30c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/I-MwP6js30c/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/I-MwP6js30c/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/I-MwP6js30c/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion 31 - Control Binders",
            "description": "If it was worth doing, it is worth keeping. Students work hard at completing assignments and projects in school; however, often, these are seen only by the teacher, graded and returned to the student. Sometimes, the work was posted on a classroom wall or in a school hallway. Many teachers kept portfolios of student work for report card conferences, and the rare teacher taught students how to build their own portfolios from their work. What a joy it would be if students felt their work was something more than a piece of paper to be put in a big blue bin at the end of the year. \n\nIt is possible for digital portfolios to be truly valuable to both teachers and students, by providing insight into not only what students created, but also how and why. Teachers should understand that by capturing student learning progress and performance in the moment we are able to tap in to the true power of portfolios, which lies in revisiting the materials.\n\nBy requiring a binder your students will have an organized system to store, organize, and recall what they’ve learned. This video technique will help you understand my favorite way for keeping track of students materials."
          }
        },
        "statistics": {
          "viewCount": 457,
          "likeCount": "0",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/-PgNEx6RaCj0Rq6iD9imRzM7z_U\"',
        "youtubeid": "GsFOcMOQJuQ",
        "snippet": {
          "publishedAt": "2015-09-02T14:35:07.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 32 - SLANT",
          "description": "One of the best skills I have ever learned - and it is a shame I only learned it as an adult - is how to be a good member of an audience, whether that be an audience of 1 or 100. Learning how to listen well is equally as important as learning how to speak well.\n\nIf you aspire create good conversationalists, teach students to be attentive listeners. To be interesting, students have to be interested. \n\nDale Carnegie says, \"Ask questions that other persons will enjoy answering. Encourage them to talk about themselves and their accomplishments. Remember that the people you are talking to are a hundred times more interested in themselves and their wants and problems than they are in you and your problems. A person's toothache means more to that person than a famine in China which kills a million people. [...] Think of that the next time you start a conversation.\"\n\nThis technique, SLANT offers a simple way to start your students off on the right path to becoming good listeners.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/GsFOcMOQJuQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/GsFOcMOQJuQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/GsFOcMOQJuQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 32 - SLANT",
            "description": "One of the best skills I have ever learned - and it is a shame I only learned it as an adult - is how to be a good member of an audience, whether that be an audience of 1 or 100. Learning how to listen well is equally as important as learning how to speak well.\n\nIf you aspire create good conversationalists, teach students to be attentive listeners. To be interesting, students have to be interested. \n\nDale Carnegie says, \"Ask questions that other persons will enjoy answering. Encourage them to talk about themselves and their accomplishments. Remember that the people you are talking to are a hundred times more interested in themselves and their wants and problems than they are in you and your problems. A person's toothache means more to that person than a famine in China which kills a million people. [...] Think of that the next time you start a conversation.\"\n\nThis technique, SLANT offers a simple way to start your students off on the right path to becoming good listeners."
          }
        },
        "statistics": {
          "viewCount": 3933,
          "likeCount": "11",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/6EHXd5TsT_M05tibdnPcAl9d_38\"',
        "youtubeid": "okNAawQlq2g",
        "snippet": {
          "publishedAt": "2015-09-03T06:04:15.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 33 - On Your Mark",
          "description": "Being prepared helps create the proper environment for enhancing student growth. Just as a coach would never allow a player to practice without their helmet or shoes, so too should a teacher never allow students to begin class without all the materials they need. This means teachers need to be clear about what students need, how long they have to get it, and regularly use consequences for not having the materials.\n\nThis of this preparation as gathering the ingredients to a recipe. If all of the ingredients are not present, you can still cook, but something will always be missing.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/okNAawQlq2g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/okNAawQlq2g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/okNAawQlq2g/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Kaizen",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 33 - On Your Mark",
            "description": "Being prepared helps create the proper environment for enhancing student growth. Just as a coach would never allow a player to practice without their helmet or shoes, so too should a teacher never allow students to begin class without all the materials they need. This means teachers need to be clear about what students need, how long they have to get it, and regularly use consequences for not having the materials.\n\nThis of this preparation as gathering the ingredients to a recipe. If all of the ingredients are not present, you can still cook, but something will always be missing."
          }
        },
        "statistics": {
          "viewCount": 493,
          "likeCount": "1",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/B-RGo_q2_Q9oz9Mnd1tQEkLzq88\"',
        "youtubeid": "4ZzIAQEP6tA",
        "snippet": {
          "publishedAt": "2015-09-04T04:25:44.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 34 - Seat Signals",
          "description": "Technique 34, Seat Signals, helps teachers avoid disrupting their lessons by having students use nonverbal seat signals for certain requests. When teachers allow the use of seat signals, students can non-verbally ask to use the bathroom, request a pencil during a lesson, or receive a tissue without interrupting the teacher’s train of thought. \n\nEvidence says that seat signals are a great way to produce an efficient classroom environment. Time is always a factor in a classroom and unrelated questions during a lecture are things that could sometimes distract the whole class. \n\nOne of the main things that can cause information to get stopped at working memory (before being stored in long-term memory) is interference. Interference is when someone or something distracts a student while he/she is concentrated on something else. When students are using silent and non-disturbing motions to ask common questions that could interrupt lecture, the amount of information going into long term memory increases.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4ZzIAQEP6tA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4ZzIAQEP6tA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4ZzIAQEP6tA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "School",
            "Classroom",
            "Teacher",
            "seat signals",
            "Learn",
            "Lesson",
            "Teachers",
            "Lessons",
            "Teach Like A Champion: 49 Techniques That Put Students On The Path To College (K-12)",
            "Tutorial",
            "Kaizen",
            "Education",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 34 - Seat Signals",
            "description": "Technique 34, Seat Signals, helps teachers avoid disrupting their lessons by having students use nonverbal seat signals for certain requests. When teachers allow the use of seat signals, students can non-verbally ask to use the bathroom, request a pencil during a lesson, or receive a tissue without interrupting the teacher’s train of thought. \n\nEvidence says that seat signals are a great way to produce an efficient classroom environment. Time is always a factor in a classroom and unrelated questions during a lecture are things that could sometimes distract the whole class. \n\nOne of the main things that can cause information to get stopped at working memory (before being stored in long-term memory) is interference. Interference is when someone or something distracts a student while he/she is concentrated on something else. When students are using silent and non-disturbing motions to ask common questions that could interrupt lecture, the amount of information going into long term memory increases."
          }
        },
        "statistics": {
          "viewCount": 737,
          "likeCount": "0",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/kefk9fane05d7QTIJaZH_ddj1X8\"',
        "youtubeid": "FvR1jIy9MyY",
        "snippet": {
          "publishedAt": "2016-08-10T05:36:57.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 35 - Props",
          "description": "Learn just how important public praise can be to creating a positive classroom culture.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FvR1jIy9MyY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FvR1jIy9MyY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FvR1jIy9MyY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/FvR1jIy9MyY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/FvR1jIy9MyY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teach Like a Champion",
            "Technique 35",
            "PROPS",
            "Props",
            "Bryan Teacher",
            "Bryan Betz"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 35 - Props",
            "description": "Learn just how important public praise can be to creating a positive classroom culture."
          }
        },
        "statistics": {
          "viewCount": 129,
          "likeCount": "2",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "1"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/7xJCwXl1Bxct5lBZtUGtnpZwDac\"',
        "youtubeid": "9sX881J7RSE",
        "snippet": {
          "publishedAt": "2015-09-11T04:19:28.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 36 - 100 Percent (Part 1 of 4)",
          "description": "Some might see this technique as a practice in futility or pure madness; I think 100% is essential to maintaining an authoritative (in the sense you have control) voice in your classroom without having to resort to draconian discipline. \n\nTechnique 36: 100 percent, is the idea that when teaching you must always have 100 percent compliance in your classroom. As a teacher you have to make 100 percent the standard, not the goal. It means that what you request gets done and what you request is moving your classroom towards maximum efficiency. \n\nThe technique is very involved and has a lot of value, so I wanted to break it up into more manageable chunks. This video is part 1 of 4.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9sX881J7RSE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9sX881J7RSE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9sX881J7RSE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "discipline",
            "Teaching",
            "100 percent",
            "Kaizen",
            "classroom",
            "100%"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 36 - 100 Percent (Part 1 of 4)",
            "description": "Some might see this technique as a practice in futility or pure madness; I think 100% is essential to maintaining an authoritative (in the sense you have control) voice in your classroom without having to resort to draconian discipline. \n\nTechnique 36: 100 percent, is the idea that when teaching you must always have 100 percent compliance in your classroom. As a teacher you have to make 100 percent the standard, not the goal. It means that what you request gets done and what you request is moving your classroom towards maximum efficiency. \n\nThe technique is very involved and has a lot of value, so I wanted to break it up into more manageable chunks. This video is part 1 of 4."
          }
        },
        "statistics": {
          "viewCount": 2532,
          "likeCount": "3",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "7"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/tLNBvkXujg9x7mXiczf09bjHvE4\"',
        "youtubeid": "ptIFMstCBuw",
        "snippet": {
          "publishedAt": "2015-09-14T07:29:51.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 36 - 100 Percent Part 2",
          "description": "How to intervene effectively.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ptIFMstCBuw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ptIFMstCBuw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ptIFMstCBuw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "technnique 36",
            "Kaizen",
            "100 percent",
            "Teach like a champion",
            "Teaching"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 36 - 100 Percent Part 2",
            "description": "How to intervene effectively."
          }
        },
        "statistics": {
          "viewCount": 834,
          "likeCount": "2",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }, {
        "kind": "youtube#video",
        "etag": '\"sZ5p5Mo8dPpfIzLYQBF8QIQJym0/5GhPmNYR2JkA_nX998RP-acrc9U\"',
        "youtubeid": "Gjx9diHtPfk",
        "snippet": {
          "publishedAt": "2015-09-17T05:33:30.000Z",
          "channelId": "UCMXOhFgm1b8yJGGt72rjF0Q",
          "title": "Teach Like a Champion Technique 36 - 100 Percent (Part 3)",
          "description": "Rely on firm, calm finesse – Remember that gaining 100 PERCENT compliance is not about power, but about achieving\nan important purpose – that students will succeed. Take yourself out of the equation and focus on the goal. Rather than saying, “I\nasked for your eyes on me because when I ask you for something I expect you to do it,” try “I need your eyes on me so you can learn.”",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Gjx9diHtPfk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Gjx9diHtPfk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Gjx9diHtPfk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Gjx9diHtPfk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Gjx9diHtPfk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Kaizen Teaching",
          "tags": [
            "Teaching",
            "Kaizen"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Teach Like a Champion Technique 36 - 100 Percent (Part 3)",
            "description": "Rely on firm, calm finesse – Remember that gaining 100 PERCENT compliance is not about power, but about achieving\nan important purpose – that students will succeed. Take yourself out of the equation and focus on the goal. Rather than saying, “I\nasked for your eyes on me because when I ask you for something I expect you to do it,” try “I need your eyes on me so you can learn.”"
          }
        },
        "statistics": {
          "viewCount": 766,
          "likeCount": "1",
          "dislikeCount": "0",
          "favoriteCount": "0",
          "commentCount": "0"
        }
      }
    ).then(() => {
      console.log('finished populating videos');
    });
  });

// var videoArray = [];
// for (var i = 1; i < 200; i++) {
//   videoArray.push({
//     youtubeid: 'i0dCwNT7JZc'
//   })
// }
// Video.createAsync(videoArray)
//   .then(() => {
//     console.log('finished populuting crazy lots of syllabuses');
//   });


User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });