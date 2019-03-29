import eleCalendar from 'ele-calendar'
import 'ele-calendar/dist/vue-calendar.css'
export default {
  data() {
    return {
      datedef: [{
          "date": "2019-03-10",
          "content": 555,
          "cid": null
        },
        {
          "date": "2019-03-15",
          "content": 666,
          "cid": null
        },
      ]
    }
  },
  prop: 'date' ,//对应日期字段名,
  components: {
    eleCalendar
  },
  methods: {
    renderContent(h, parmas) {
      const loop = data => {
        return (
          data.defvalue.value ? ( <div> <div> {data.defvalue.text} </div><span style = "color:red" > { "￥" + data.defvalue.value.content} </span> </div > ) : <div> {data.defvalue.text} </div >
        )
      }
      return ( < div style = "min-height:60px;" > {loop(parmas)} </div>
      );
    },
    clickChange(data, event, row, dome) {
      console.log(data, event, row, dome)
    }
  }
}
