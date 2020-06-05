import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';
@Injectable()
export class DemoDataProviderService {
  /*
   Parent-children communicate via a service is used.
   https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
  */

  // Observable string stream
  private dataSetChangeSource = new Subject<string>();

  // Observable string stream
  dataSetChanged$ = this.dataSetChangeSource.asObservable();

  private data_: Array<Object> = [
    {customName: 'Name1', customValue1: 10, customValue2: 12, customValue3: 7},
    {customName: 'Name2', customValue1: 14, customValue2: 10, customValue3: 17},
    {customName: 'Name3', customValue1: 21, customValue2: 4, customValue3: 15},
  ];

  private dataSet_: anychart.data.Set = anychart.data.set(this.data_);

  private mappings_: { [key: string]: anychart.data.View } = {
    'data1': this.dataSet_.mapAs({x: ['customName'], value: ['customValue1']}),
    'data2': this.dataSet_.mapAs({x: ['customName'], value: ['customValue2']}),
    'data3': this.dataSet_.mapAs({x: ['customName'], value: ['customValue3']})
  };


  public getDataList() {
    const res: Array<string> = [];
    for (const key in this.mappings_) {
      if (this.mappings_.hasOwnProperty(key)) {
          res.push(key);
      }
    }
    return res;
  }

  public getData(key: string = 'data1') {
    return this.mappings_[key];
  }
public getResData() {
 return [
      {
        "name": "Colleen Melendez",
        "tags": [
          "communicability",
          "focus on results",
          "oratory"
        ],
        "type": "Team Leader",
        "image": "http://cdn.anychart.com/images/resource-chart/operator_3.png",
        "activities": [
          {
            "name": "Drawing on the performance indicators report group",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 100
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Training Operators",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 180
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Work with documents",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 120
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Training Operators",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 120
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Making a report this week, meeting with senior operators and senior specialists",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 360
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Admission Exams Operators",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 480
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Verification of compliance indicators, suggestions for improvement",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 60
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Check performance group",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 120
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Checking the quality of senior specialist",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 200
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Reporting securities",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 100
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Preparation of the report",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 120
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Presentation of results in the last week",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 120
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Rally specialists and supervisors",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 240
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Vacation",
            "intervals": [
              {
                "start": "2016-10-08",
                "end": "2016-10-14",
                "minutesPerDay": 480
              }
            ],
            "fill": "#68b8e8"
          }
        ]
      },
      {
        "name": "Hayes Hewitt",
        "image": "http://cdn.anychart.com/images/resource-chart/operator_9.png",
        "tags": [
          "organization",
          "industry",
          "self-confidence"
        ],
        "type": "Senior Specialist",
        "activities": [
          {
            "name": "Putting operators assessments",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 480
              }
            ],
            "fill": "#3ea290"
          },
          {
            "name": "Training Operators",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 480
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Training Operators",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 240
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 240
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Audition Call Operators",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 240
              }
            ],
            "fill": "#7d5ba6"
          },
          {
            "name": "Call Line claims",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 240
              }
            ],
            "fill": "#3a606e"
          },
          {
            "name": "Audition Call Operators",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 120
              }
            ],
            "fill": "#7d5ba6"
          },
          {
            "name": "Call Line claims",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 240
              }
            ],
            "fill": "#3a606e"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 120
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Calls calibration",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 60
              }
            ],
            "fill": "#de91ae"
          },
          {
            "name": "Audition Call Operators",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 120
              }
            ],
            "fill": "#7d5ba6"
          },
          {
            "name": "Answers calls conflict subscribers",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 240
              }
            ],
            "fill": "#816c61"
          },
          {
            "name": "Calls calibration",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 60
              }
            ],
            "fill": "#de91ae"
          },
          {
            "name": "Help Operator",
            "intervals": [
              {
                "start": "2016-10-11",
                "end": "2016-10-11",
                "minutesPerDay": 240
              }
            ],
            "fill": "#aaae8e"
          },
          {
            "name": "Call Line claims",
            "intervals": [
              {
                "start": "2016-10-11",
                "end": "2016-10-11",
                "minutesPerDay": 240
              }
            ],
            "fill": "#3a606e"
          },
          {
            "name": "Call Line claims",
            "intervals": [
              {
                "start": "2016-10-12",
                "end": "2016-10-12",
                "minutesPerDay": 180
              }
            ],
            "fill": "#3a606e"
          },
          {
            "name": "Answers calls conflict subscribers",
            "intervals": [
              {
                "start": "2016-10-12",
                "end": "2016-10-12",
                "minutesPerDay": 120
              }
            ],
            "fill": "#816c61"
          },
          {
            "name": "Calls calibration",
            "intervals": [
              {
                "start": "2016-10-12",
                "end": "2016-10-12",
                "minutesPerDay": 180
              }
            ],
            "fill": "#de91ae"
          },
          {
            "name": "Listening to the call operator",
            "intervals": [
              {
                "start": "2016-10-13",
                "end": "2016-10-13",
                "minutesPerDay": 210
              }
            ],
            "fill": "#55c1d2"
          },
          {
            "name": "Call Line claims",
            "intervals": [
              {
                "start": "2016-10-13",
                "end": "2016-10-13",
                "minutesPerDay": 270
              }
            ],
            "fill": "#3a606e"
          },
          {
            "name": "Help Operator",
            "intervals": [
              {
                "start": "2016-10-14",
                "end": "2016-10-14",
                "minutesPerDay": 280
              }
            ],
            "fill": "#aaae8e"
          },
          {
            "name": "Call Line claims",
            "intervals": [
              {
                "start": "2016-10-14",
                "end": "2016-10-14",
                "minutesPerDay": 200
              }
            ],
            "fill": "#3a606e"
          }
        ]
      },
      {
        "name": "Willow Fry",
        "type": "Senior Specialist",
        "tags": [
          "activity",
          "creativity",
          "oratory"
        ],
        "image": "http://cdn.anychart.com/images/resource-chart/operator_10.png",
        "activities": [
          {
            "name": "Audition Call Operators",
            "intervals": [
              {
                "start": "2016-10-01",
                "end": "2016-10-01",
                "minutesPerDay": 480
              }
            ],
            "fill": "#7d5ba6"
          },
          {
            "name": "Calls calibration",
            "intervals": [
              {
                "start": "2016-10-02",
                "end": "2016-10-02",
                "minutesPerDay": 120
              }
            ],
            "fill": "#de91ae"
          },
          {
            "name": "Putting operators assessments",
            "intervals": [
              {
                "start": "2016-10-02",
                "end": "2016-10-02",
                "minutesPerDay": 120
              }
            ],
            "fill": "#3ea290"
          },
          {
            "name": "Help Operator",
            "intervals": [
              {
                "start": "2016-10-02",
                "end": "2016-10-02",
                "minutesPerDay": 240
              }
            ],
            "fill": "#aaae8e"
          },
          {
            "name": "Call Line claims",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 330
              }
            ],
            "fill": "#3a606e"
          },
          {
            "name": "Answers calls conflict subscribers",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 150
              }
            ],
            "fill": "#816c61"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 240
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Training Operators",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 240
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Call Line claims",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 480
              }
            ],
            "fill": "#3a606e"
          },
          {
            "name": "Call Line claims",
            "intervals": [
              {
                "start": "2016-10-08",
                "end": "2016-10-08",
                "minutesPerDay": 480
              }
            ],
            "fill": "#3a606e"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-09",
                "end": "2016-10-09",
                "minutesPerDay": 150
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Line claims",
            "intervals": [
              {
                "start": "2016-10-09",
                "end": "2016-10-09",
                "minutesPerDay": 120
              }
            ],
            "fill": "#3a606e"
          },
          {
            "name": "Calls calibration",
            "intervals": [
              {
                "start": "2016-10-09",
                "end": "2016-10-09",
                "minutesPerDay": 210
              }
            ],
            "fill": "#de91ae"
          },
          {
            "name": "Putting operators assessments",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 240
              }
            ],
            "fill": "#3ea290"
          },
          {
            "name": "Help Operator",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 240
              }
            ],
            "fill": "#aaae8e"
          },
          {
            "name": "Call Line claims",
            "intervals": [
              {
                "start": "2016-10-11",
                "end": "2016-10-11",
                "minutesPerDay": 120
              }
            ],
            "fill": "#3a606e"
          },
          {
            "name": "Answers calls conflict subscribers",
            "intervals": [
              {
                "start": "2016-10-11",
                "end": "2016-10-11",
                "minutesPerDay": 240
              }
            ],
            "fill": "#816c61"
          },
          {
            "name": "Help Operator",
            "intervals": [
              {
                "start": "2016-10-11",
                "end": "2016-10-11",
                "minutesPerDay": 120
              }
            ],
            "fill": "#aaae8e"
          },
          {
            "name": "Listening to the call operator",
            "intervals": [
              {
                "start": "2016-10-12",
                "end": "2016-10-12",
                "minutesPerDay": 210
              }
            ],
            "fill": "#55c1d2"
          },
          {
            "name": "Answers calls conflict subscribers",
            "intervals": [
              {
                "start": "2016-10-12",
                "end": "2016-10-12",
                "minutesPerDay": 270
              }
            ],
            "fill": "#816c61"
          }
        ]
      },
      {
        "name": "Oren Dunlap",
        "type": "Senior Operator",
        "tags": [
          "initiative",
          "reliability",
          "attentiveness"
        ],
        "image": "http://cdn.anychart.com/images/resource-chart/operator_5.png",
        "activities": [
          {
            "name": "Help Operator",
            "intervals": [
              {
                "start": "2016-10-01",
                "end": "2016-10-01",
                "minutesPerDay": 360
              }
            ],
            "fill": "#aaae8e"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Calls Calibration",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 600
              }
            ],
            "fill": "#de91ae"
          },
          {
            "name": "Listening Operator Calls",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 720
              }
            ],
            "fill": "#55c1d2"
          },
          {
            "name": "Help Operator",
            "intervals": [
              {
                "start": "2016-10-08",
                "end": "2016-10-08",
                "minutesPerDay": 300
              }
            ],
            "fill": "#aaae8e"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-09",
                "end": "2016-10-09",
                "minutesPerDay": 180
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Help Operator",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 360
              }
            ],
            "fill": "#aaae8e"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-11",
                "end": "2016-10-11",
                "minutesPerDay": 600
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-13",
                "end": "2016-10-13",
                "minutesPerDay": 600
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-14",
                "end": "2016-10-14",
                "minutesPerDay": 600
              }
            ],
            "fill": "#04724d"
          }
        ]
      },
      {
        "name": "Caldwell Summers",
        "type": "Senior Operator",
        "tags": [
          "resourcefulness",
          "reliability",
          "fast learner"
        ],
        "image": "http://cdn.anychart.com/images/resource-chart/operator_6.png",
        "activities": [
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-01",
                "end": "2016-10-01",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-02",
                "end": "2016-10-02",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Answers calls conflict subscribers",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 540
              }
            ],
            "fill": "#816c61"
          },
          {
            "name": "Listening to the long calls",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 600
              }
            ],
            "fill": "#55c1d2"
          },
          {
            "name": "Listening to the calls negative assessments",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 600
              }
            ],
            "fill": "#55c1d2"
          },
          {
            "name": "Help Operator",
            "intervals": [
              {
                "start": "2016-10-08",
                "end": "2016-10-08",
                "minutesPerDay": 360
              }
            ],
            "fill": "#aaae8e"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-09",
                "end": "2016-10-09",
                "minutesPerDay": 600
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Help Operator",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 420
              }
            ],
            "fill": "#aaae8e"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-12",
                "end": "2016-10-12",
                "minutesPerDay": 420
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Help Operator",
            "intervals": [
              {
                "start": "2016-10-13",
                "end": "2016-10-13",
                "minutesPerDay": 300
              }
            ],
            "fill": "#aaae8e"
          }
        ]
      },
      {
        "name": "Abra Sykes",
        "tags": [
          "communicability",
          "initiative",
          "fast learner"
        ],
        "image": "http://cdn.anychart.com/images/resource-chart/operator_15.png",
        "type": "Operator",
        "activities": [
          {
            "name": "Call reception",
            "intervals": [
              {
                "start": "2016-10-01",
                "end": "2016-10-01",
                "minutesPerDay": 240
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call reception",
            "intervals": [
              {
                "start": "2016-10-02",
                "end": "2016-10-02",
                "minutesPerDay": 180
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Training",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 180
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Call reception",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 240
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Training",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 120
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Examinations",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 120
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Call reception",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 360
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call reception",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 600
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call reception",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 360
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call reception",
            "intervals": [
              {
                "start": "2016-10-09",
                "end": "2016-10-09",
                "minutesPerDay": 660
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call reception",
            "intervals": [
              {
                "start": "2016-10-11",
                "end": "2016-10-11",
                "minutesPerDay": 720
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call reception",
            "intervals": [
              {
                "start": "2016-10-13",
                "end": "2016-10-13",
                "minutesPerDay": 720
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call reception",
            "intervals": [
              {
                "start": "2016-10-14",
                "end": "2016-10-14",
                "minutesPerDay": 300
              }
            ],
            "fill": "#04724d"
          }
        ]
      },
      {
        "name": "Clayton Matthews",
        "tags": [
          "accuracy",
          "duty",
          "perseverance"
        ],
        "image": "http://cdn.anychart.com/images/resource-chart/operator_2.png",
        "type": "Operator",
        "activities": [
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-01",
                "end": "2016-10-01",
                "minutesPerDay": 240
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-02",
                "end": "2016-10-02",
                "minutesPerDay": 270
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Training",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 180
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 470
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Training",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 180
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Examinations",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 120
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 420
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 570
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-08",
                "end": "2016-10-08",
                "minutesPerDay": 360
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-09",
                "end": "2016-10-09",
                "minutesPerDay": 420
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-11",
                "end": "2016-10-11",
                "minutesPerDay": 600
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-14",
                "end": "2016-10-14",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          }
        ]
      },
      {
        "name": "Bertha Clay",
        "tags": [
          "attentiveness",
          "creativity",
          "perseverance"
        ],
        "image": "http://cdn.anychart.com/images/resource-chart/operator_14.png",
        "type": "Operator",
        "activities": [
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-01",
                "end": "2016-10-01",
                "minutesPerDay": 240
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-02",
                "end": "2016-10-02",
                "minutesPerDay": 600
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 300
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Training",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 240
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 540
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-08",
                "end": "2016-10-08",
                "minutesPerDay": 510
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-11",
                "end": "2016-10-11",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-12",
                "end": "2016-10-12",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-13",
                "end": "2016-10-13",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-14",
                "end": "2016-10-14",
                "minutesPerDay": 390
              }
            ],
            "fill": "#04724d"
          }
        ]
      },
      {
        "name": "Devin Pate",
        "type": "Operator",
        "tags": [
          "stress resistance",
          "punctuality",
          "decency"
        ],
        "image": "http://cdn.anychart.com/images/resource-chart/operator_1.png",
        "activities": [
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-01",
                "end": "2016-10-01",
                "minutesPerDay": 690
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 240
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 330
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Training",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 330
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Examinations",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 120
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 90
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 240
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-07",
                "end": "2016-10-07",
                "minutesPerDay": 720
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-08",
                "end": "2016-10-08",
                "minutesPerDay": 320
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-09",
                "end": "2016-10-09",
                "minutesPerDay": 320
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-12",
                "end": "2016-10-12",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-13",
                "end": "2016-10-13",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          }
        ]
      },
      {
        "name": "Dane Barry",
        "tags": [
          "responsibility",
          "discipline",
          "reliability"
        ],
        "image": "http://cdn.anychart.com/images/resource-chart/operator_8.png",
        "type": "Operator",
        "activities": [
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 660
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Training",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 150
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Examinations",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 120
              }
            ],
            "fill": "#2274a5"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-05",
                "end": "2016-10-05",
                "minutesPerDay": 410
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 660
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-08",
                "end": "2016-10-08",
                "minutesPerDay": 420
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 720
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-11",
                "end": "2016-10-11",
                "minutesPerDay": 420
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-12",
                "end": "2016-10-12",
                "minutesPerDay": 330
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-13",
                "end": "2016-10-13",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-14",
                "end": "2016-10-14",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          }
        ]
      },
      {
        "name": "Kane Boyd",
        "tags": [
          "attentiveness",
          "flexibility",
          "organization"
        ],
        "image": "http://cdn.anychart.com/images/resource-chart/operator_7.png",
        "type": "Operator",
        "activities": [
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-01",
                "end": "2016-10-01",
                "minutesPerDay": 180
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-02",
                "end": "2016-10-02",
                "minutesPerDay": 720
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 360
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Training",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 120
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 480
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 540
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-08",
                "end": "2016-10-08",
                "minutesPerDay": 540
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-09",
                "end": "2016-10-09",
                "minutesPerDay": 420
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-11",
                "end": "2016-10-11",
                "minutesPerDay": 720
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-13",
                "end": "2016-10-13",
                "minutesPerDay": 720
              }
            ],
            "fill": "#04724d"
          }
        ]
      },
      {
        "name": "Emma Wood",
        "tags": [
          "high efficiency",
          "non-conflict",
          "stress resistance"
        ],
        "image": "http://cdn.anychart.com/images/resource-chart/operator_4.png",
        "type": "Operator",
        "activities": [
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-01",
                "end": "2016-10-01",
                "minutesPerDay": 600
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-02",
                "end": "2016-10-02",
                "minutesPerDay": 420
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 420
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Training",
            "intervals": [
              {
                "start": "2016-10-03",
                "end": "2016-10-03",
                "minutesPerDay": 180
              }
            ],
            "fill": "#3f51b5"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-04",
                "end": "2016-10-04",
                "minutesPerDay": 360
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-06",
                "end": "2016-10-06",
                "minutesPerDay": 420
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-08",
                "end": "2016-10-08",
                "minutesPerDay": 360
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-09",
                "end": "2016-10-09",
                "minutesPerDay": 390
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-10",
                "end": "2016-10-10",
                "minutesPerDay": 450
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-12",
                "end": "2016-10-12",
                "minutesPerDay": 600
              }
            ],
            "fill": "#04724d"
          },
          {
            "name": "Call Reception",
            "intervals": [
              {
                "start": "2016-10-13",
                "end": "2016-10-13",
                "minutesPerDay": 600
              }
            ],
            "fill": "#04724d"
          }
        ]
      }]
    }
    
    

  public setCurrentDataSet(key: string = 'data1') {
    this.dataSetChangeSource.next(key);
  }
}
