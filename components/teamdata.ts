
import { MainCategory } from './teamtypes.ts';

export const MENTOR_DATA: MainCategory[] = [
  {
    name: "商科与经济类",
    subCategories: [
      {
        name: "金融 / 金融数学 / 风险管理",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "张老师", education: { master: "芝加哥大学 (金融数学)", bachelor: "中央财经大学 (国际金融)" } },
              { name: "马老师", education: { master: "芝加哥大学 (金融)", bachelor: "加州大学圣芭芭拉分校 (金融数学)" } },
              { name: "张老师", education: { master: "加州大学圣地亚哥分校 (金融)", bachelor: "中央财经大学 (国际贸易/金融风险管理)" } },
              { name: "梅老师", education: { master: "哥伦比亚大学 (企业风险管理)", bachelor: "加州大学尔湾分校 (政治学与社会学)" } },
              { name: "刘老师", education: { master: "芝加哥大学 (金融数学)", bachelor: "圣路易斯华盛顿大学 (系统工程)" } },
              { name: "魏老师", education: { master: "哥伦比亚大学 (企业风险管理)" } },
              { name: "史老师", education: { master: "加州大学圣地亚哥分校 (量化金融)", bachelor: "加州大学圣地亚哥分校 (经济学)" } },
              { name: "高老师", education: { master: "多伦多大学 (金融数学)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "李老师", education: { master: "帝国理工学院 (投资与财富管理)", bachelor: "曼彻斯特大学 (精算与数学)" } },
              { name: "Satina", education: { master: "帝国理工学院 (金融数学)", bachelor: "曼彻斯特大学 (金融数学)" } },
              { name: "何老师", education: { master: "LSE (风险与金融)", bachelor: "LSE (经济学)" } },
              { name: "郭老师", education: { master: "LSE (风险与金融)", bachelor: "武汉大学 (经济学+数学)" } },
              { name: "张老师", education: { master: "伦敦大学学院 (金融学)", bachelor: "伦敦大学学院 (经济学)" } },
              { name: "付老师", education: { master: "LSE (金融与风险)" } },
              { name: "周老师", education: { master: "帝国理工学院 (金融与会计)", bachelor: "四川大学 (会计学/ACCA)" } },
              { name: "王老师", education: { master: "LSE (金融与经济)", bachelor: "武汉大学 (金融工程)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "宋老师", education: { master: "新加坡国立大学 (金融)", bachelor: "曼彻斯特大学 (国际商务金融经济)" } },
              { name: "谭老师", education: { master: "新加坡国立大学 (金融经济学)", bachelor: "浙江大学 (金融服务与管理)" } },
              { name: "张老师", education: { master: "香港大学 (金融科技)", bachelor: "曼彻斯特大学 (计算机科学与数学)" } },
              { name: "陈老师", education: { master: "香港大学 (金融学)" } },
            ]
          }
        ]
      },
      {
        name: "经济学",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "王老师", education: { master: "杜克大学 (计量经济学)" } },
              { name: "潘老师", education: { master: "哥伦比亚大学 (经济学)", bachelor: "UCLA (商务经济学)" } },
              { name: "刘老师", education: { master: "康奈尔大学 (应用经济与管理)", bachelor: "康奈尔大学 (经济学)" } },
              { name: "潘老师", education: { master: "UCLA (经济)", bachelor: "中国人民大学 (财务管理)" } },
              { name: "张老师", education: { master: "南加利福尼亚大学 (应用经济和计量经济)", bachelor: "广东金融学院 (保险学)" } },
              { name: "李老师", education: { master: "康奈尔大学 (应用经济与管理-科技AI)", bachelor: "UCSD (商业经济学+心理学)" } },
              { name: "丁老师", education: { master: "乔治敦大学 (经济学)", bachelor: "西南财经大学 (国际商务)" } },
              { name: "黄老师", education: { master: "密歇根大学安娜堡分校 (应用经济学)", bachelor: "西交利物浦大学 (经济学)" } },
              { name: "李老师", education: { master: "加州伯克利 (国际发展-发展经济学)", bachelor: "西北农林 (经济学)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "牟老师", education: { doctor: "曼彻斯特大学 (卫生经济学)", master: "伦敦大学学院 (卫生经济与决策科学)" } },
              { name: "陈老师", education: { master: "帝国理工学院 (经济)", bachelor: "曼彻斯特大学 (国际金融)" } },
              { name: "高老师", education: { master: "LSE (经济学)", bachelor: "北京外国语大学 (国际经济与贸易)" } },
              { name: "曾老师", education: { master: "帝国理工学院 (商业经济与战略)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "Li老师", education: { master: "南洋理工大学 (管理经济学)", bachelor: "澳大利亚国立大学 (金融学)" } },
              { name: "张老师", education: { master: "南洋理工大学 (管理经济学)", bachelor: "湖南大学 (国际经济与贸易)" } },
              { name: "詹老师", education: { master: "香港大学 (经济)", bachelor: "复旦大学 (财务管理)" } },
              { name: "Sylvia 宋老师", education: { master: "香港大学 (经济学)", bachelor: "吉林大学 (信用管理)" } },
              { name: "陈老师", education: { master: "南洋理工大学 (国际政治经济学)", bachelor: "中国人民大学 (国际政治经济学)" } },
            ]
          }
        ]
      },
      {
        name: "商业分析 / 分析",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "宁老师", education: { master: "南加利福尼亚大学 (商业分析)", bachelor: "加州大学圣芭芭拉分校 (经济)" } },
              { name: "赖老师", education: { master: "加州伯克利 (分析学)", bachelor: "密歇根安娜堡 (数学与统计)" } },
              { name: "嵇老师", education: { master: "加州伯克利 (分析)", bachelor: "罗切斯特大学 (统计/商业分析/经济学)" } },
              { name: "郭老师", education: { master: "芝加哥大学 (数据科学与分析)", bachelor: "密歇根大学 (理学)" } },
              { name: "马老师", education: { master: "芝加哥大学 (分析学)", bachelor: "俄亥俄州立大学 (金融数学)" } },
              { name: "张老师", education: { master: "新加坡国立大学 (工业与系统工程-数据分析)" } },
              { name: "李老师", education: { master: "哥伦比亚大学 (应用分析)", bachelor: "加州大学尔湾分校 (经济学)" } },
              { name: "罗老师", education: { master: "南加利福尼亚大学 (商业分析)", bachelor: "波士顿大学 (公共关系学)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "蒲老师", education: { master: "帝国理工学院 (商业分析)", bachelor: "康涅狄格大学（经济）" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "刘老师", education: { master: "新加坡国立大学 (企业商业分析)", bachelor: "中国劳动关系学院 (经济学)" } },
              { name: "Frida", education: { master: "新加坡国立大学 (企业商业分析)", bachelor: "上海大学 (信息管理与信息系统)" } },
              { name: "商老师", education: { master: "香港大学 (商业分析)", bachelor: "中南财经政法大学 (投资学|心机与计算科学)" } },
              { name: "王老师", education: { master: "香港中文大学 (商业分析)", bachelor: "北卡教堂山 (统计)" } },
              { name: "徐老师", education: { master: "香港中文大学 (商业分析)", bachelor: "南京大学 (财务管理)" } },
              { name: "冯老师", education: { master: "香港大学 (数据分析)", bachelor: "西南大学 (经济学)" } },
            ]
          }
        ]
      },
      {
        name: "管理 / MBA / HR管理",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "赵老师", education: { master: "芝加哥大学 (MBA)", bachelor: "乔治梅森大学 (网络安全)" } },
              { name: "邵老师", education: { master: "杜克大学 (管理MQM)", bachelor: "佛罗里达大学 (经济学)" } },
              { name: "邸老师", education: { master: "宾州州立Park (MBA)" } },
              { name: "王老师", education: { master: "哥伦比亚大学 (工程管理)" } },
              { name: "王老师", education: { master: "多伦多大学 (MBA)", bachelor: "武汉科技大学 (工商管理)" } },
              { name: "尹老师", education: { master: "布朗大学 (创新管理与创业)", bachelor: "四川大学 (工业工程)" } },
              { name: "郭老师", education: { master: "圣路易斯华盛顿大学 (工程管理)", bachelor: "加州大学戴维斯分校 (认知科学)" } },
              { name: "宁老师", education: { master: "宾夕法尼亚州立大学 (人力资源管理)", bachelor: "首都经济贸易大学 (劳动关系)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "王老师", education: { master: "剑桥大学 (MBA)", bachelor: "宾州州立 (酒店管理)" } },
              { name: "周老师", education: { master: "剑桥大学 (工商管理)", bachelor: "中山大学 (哲学)" } },
              { name: "高老师", education: { master: "LSE (管理学)" } },
              { name: "胡老师", education: { master: "帝国理工学院 (国际管理)", bachelor: "西南财经大学 (会计学)" } },
              { name: "孟老师", education: { master: "LSE (人力资源管理)", bachelor: "中国人民大学 (劳动关系)" } },
              { name: "丁老师", education: { master: "LSE (人力资源管理)", bachelor: "人大 (人力资源管理)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "林老师", education: { master: "新加坡国立大学 (管理学)" } },
              { name: "杨老师", education: { master: "香港大学 (全球管理)", bachelor: "南京师范大学 (金融)" } },
              { name: "全老师", education: { master: "新加坡国立大学 (人力资源管理)" } },
            ]
          }
        ]
      },
      {
        name: "市场营销",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "Tina老师", education: { master: "哥伦比亚大学(市场营销)", bachelor: "纽约大学 (商业)" } },
              { name: "宁老师", education: { master: "纽约大学 (整合营销)", bachelor: "波士顿大学 (广告)" } },
              { name: "朱老师", education: { master: "南 USC(市场营销)", bachelor: "中山大学 (公共关系)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "刘老师", education: { master: "帝国理工学院 (战略市场营销)", bachelor: "首都经济贸易大学 (人力资源管理)" } },
              { name: "许老师", education: { master: "帝国理工学院 (战略市场营销)", bachelor: "UBC (经济学)" } },
              { name: "李老师", education: { master: "帝国理工学院 (战略营销)", bachelor: "宁波诺丁汉大学 (传播学)" } },
              { name: "Grace", education: { master: "帝国理工学院 (市场营销与战略)", bachelor: "暨南大学 (文化产业管理)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "陈老师", education: { master: "南洋理工大学 (Knowledge Management)", bachelor: "华南理工大学 (市场营销)" } },
              { name: "李老师", education: { master: "南洋理工大学 (公共管理)", bachelor: "纽卡斯尔大学 (市场营销)" } },
              { name: "王老师", education: { master: "香港中文大学 (市场营销)", bachelor: "对外经济贸易大学 (国际经济与贸易)" } },
              { name: "喬老师", education: { master: "香港中文大学 (市场营销)", bachelor: "双非（国际商务）" } },
              { name: "王老师", education: { master: "香港大学 (市场营销理学)", bachelor: "印第安纳州立大学 (艺术管理)" } },
              { name: "况老师", education: { master: "新加坡国立大学 (传播与新媒体)", bachelor: "加拿大女王大学 (编导)" } },
              { name: "李老师", education: { master: "新加坡国立大学 (市场分析与洞察)" } },
            ]
          }
        ]
      },
      {
        name: "会计",
        regions: [
          {
            regionName: "全球",
            mentors: [
              { name: "李老师", education: { master: "密歇根大学安娜堡分校 (会计)", bachelor: "密歇根州立大学 (会计学)" } },
              { name: "张老师", education: { master: "LSE (会计与金融)" } },
              { name: "Beryl 薄老师", education: { master: "LSE (会计与金融)", bachelor: "港中深 (金融)" } },
              { name: "常老师", education: { master: "新加坡南洋理工大学 (会计、金融与管理)", bachelor: "北京外国语大学 (金融学)" } },
            ]
          }
        ]
      }
    ]
  },
  {
    name: "理工科类",
    subCategories: [
      {
        name: "计算机 / 人工智能",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "张老师", education: { doctor: "佐治亚理工 (计算机)", master: "普渡大学 (ECE)" } },
              { name: "尹老师", education: { master: "康奈尔大学 (计算机科学与技术)", bachelor: "曼彻斯特大学 (计算机科学与技术)" } },
              { name: "贾老师", education: { doctor: "美国TOP10 (计算机AI方向)", master: "杜克大学 (ECE)" } },
              { name: "黄老师", education: { master: "南加州大学 (计算机科学)", bachelor: "东华大学 (软件工程)" } },
              { name: "江老师", education: { master: "UCLA (计算机科学与技术)", bachelor: "伊利诺伊大学香槟分校 (计算机)" } },
              { name: "周老师", education: { master: "卡内基梅隆大学 (信息系统管理)", bachelor: "电子科技大学 (数学与应用数学 & 金融)" } },
              { name: "王老师", education: { doctor: "WUSTL圣路易斯华盛顿 (计算机科学)", master: "纽大 (计算机工程)" } },
              { name: "Amy", education: { master: "UCSD (计算机)", bachelor: "明尼苏达双城 (计算机)" } },
              { name: "矜老师", education: { master: "加州伯克利 (计算工程)" } },
              { name: "尉老师", education: { doctor: "北卡教堂山 (信息科学)", master: "香港大学 (信息科学)", bachelor: "武汉大学 (图书馆学)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "李老师", education: { doctor: "帝国理工 (计算机)", master: "帝国理工 (计算机)" } },
              { name: "赵老师", education: { doctor: "布里斯托大学 (人工智能与机器学习)", master: "布里斯托大学 (通信网络与信号处理)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "陈老师", education: { master: "香港大学 (人工智能，伦理和社会)", bachelor: "厦门大学 (新闻学)" } },
              { name: "Giselle", education: { doctor: "新加坡国立大学 (计算机)", master: "新加坡国立大学 (计算机)" } },
              { name: "李老师", education: { master: "新加坡南洋理工大学 (计算机)" } },
              { name: "郭老师", education: { master: "新加坡国立大学 (计算机科学与技术)", bachelor: "哈尔滨工业大学" } },
              { name: "何老师", education: { master: "香港大学 (计算机科学与技术)", bachelor: "哈尔滨工业大学 (软件工程)" } },
            ]
          }
        ]
      },
      {
        name: "数据科学",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "刘老师", education: { master: "美国西北大学 (数据科学与机器学习)", bachelor: "华盛顿大学 (数学与应用数学)" } },
              { name: "杨老师", education: { master: "纽约大学 (数据科学)" } },
              { name: "李老师", education: { bachelor: "UCLA (数据科学)" } },
              { name: "李老师", education: { master: "哥伦比亚大学 (数据科学与分析)", bachelor: "深圳大学 (金融)" } },
              { name: "谢老师", education: { master: "哥伦比亚大学 (数据科学)", bachelor: "威斯康星大学麦迪逊分校 (金融)" } },
              { name: "Jesper", education: { master: "卡耐基梅隆大学 (Data Science)" } },
              { name: "郑老师", education: { master: "CMU (数据科学)", bachelor: "哥德堡大学 (经济学)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "靳老师", education: { master: "伦敦大学学院 (知识信息与数据科学)", bachelor: "KCL (数学与统计)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "党老师", education: { master: "新加坡国立大学 (数据科学与机器学习)", bachelor: "复旦大学 (计算机)" } },
              { name: "靳老师", education: { master: "香港大学 (数据科学)", bachelor: "哈工大 (数据科学与大数据技术)" } },
            ]
          }
        ]
      },
      {
        name: "工程 (ECE/材料/环境等)",
        regions: [
          {
            regionName: "北美",
            mentors: [
              { name: "焦老师", education: { master: "斯坦福 (土木工程)" } },
              { name: "许老师", education: { master: "南加利福尼亚大学 (计算机工程CE)" } },
              { name: "杨老师", education: { master: "CMU (ECE电子电气)", bachelor: "香港大学 (电子工程)" } },
              { name: "Qianyi老师", education: { master: "杜克大学 (ECE)", bachelor: "四川大学 (计算机科学与技术)" } },
              { name: "王老师", education: { master: "UCB (工业工程与运筹学)", bachelor: "上财 (数据科学和金融)" } },
              { name: "秦老师", education: { doctor: "普渡大学（生态）", master: "UCD (环境生态工程)" } },
              { name: "于老师", education: { master: "哥伦比亚大学 (运筹学与控制论)", bachelor: "武汉大学 (金融工程)" } },
              { name: "杨老师", education: { master: "宾夕法尼亚大学 (材料科学与工程)", bachelor: "西安交大 (材料科学与工程)" } },
              { name: "彭老师", education: { doctor: "UVA (ECE)", master: "华盛顿UW (EE)" } },
              { name: "杨老师", education: { doctor: "加州伯克利 (机械工程)", bachelor: "上海交通大学 (机械工程)" } },
              { name: "王老师", education: { master: "多伦多大学 (化工)", bachelor: "河北工业大学 (制药工程)" } },
              { name: "荆老师", education: { master: "多伦多大学 (化学工程)", bachelor: "阿尔伯塔 (化学)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "侯老师", education: { doctor: "帝国理工 (复合材料)", master: "北京航空航天 (材料)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "孟老师", education: { doctor: "新加坡国立大学 (材料科学与工程)", bachelor: "山东大学 (化学)" } },
              { name: "王老师", education: { master: "香港大学 (环境工程)", bachelor: "中南财经政法大学 (环境工程)" } },
              { name: "彭老师", education: { master: "香港大学 (土木工程)", bachelor: "四川农业大学 (土木)" } },
            ]
          }
        ]
      },
      {
        name: "数学 / 统计",
        regions: [
          {
            regionName: "全球",
            mentors: [
              { name: "李老师", education: { master: "纽约大学 (生物统计)" } },
              { name: "马老师", education: { master: "宾夕法尼亚大学 (统计,测量和研究技术)", bachelor: "加州大学戴维斯分校 (经济学)" } },
              { name: "何老师", education: { master: "加州伯克利分校 (统计学)", bachelor: "同济大学 (市场营销)" } },
              { name: "赵老师", education: { master: "CMU (实践统计)", bachelor: "北卡教堂山 (统计与分析)" } },
              { name: "丁老师", education: { master: "新加坡国立大学 (统计)", bachelor: "雪城大学 (经济学/国际关系)" } },
              { name: "汪老师", education: { master: "香港大学 (统计学)", bachelor: "西南大学 (数学与应用数学)" } },
            ]
          }
        ]
      },
      {
        name: "生物 / 化学 / 公共卫生",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "柴老师", education: { master: "埃默里大学 (公共卫生)" } },
              { name: "吴老师", education: { master: "JHU (健康、行为与社会理学)", bachelor: "昆山杜克大学 (全球健康学)" } },
              { name: "Clara", education: { master: "哥伦比亚大学 (流行病)", bachelor: "马斯金根大学 (公共卫生)" } },
              { name: "孙老师", education: { master: "埃默里大学 (理论化学)", bachelor: "UT Austin (化学 & 数学)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "宋老师", education: { doctor: "帝国理工学院 (Life Sciences)", master: "帝国理工学院 (合成生物学)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "凌老师", education: { master: "新加坡国立大学 (健康及环境技术)", bachelor: "中国地质大学 (环境工程)" } },
              { name: "林老师", education: { master: "新加坡国立大学 (生态环境保护)" } },
              { name: "路老师", education: { doctor: "香港大学 (生物医学)", master: "南方科技 (生物学)" } },
              { name: "由老师", education: { master: "新加坡国立大学 (生物医学工程)" } },
            ]
          }
        ]
      }
    ]
  },
  {
    name: "人文社科类",
    subCategories: [
      {
        name: "教育学",
        regions: [
          {
            regionName: "北美",
            mentors: [
              { name: "王老师", education: { master: "宾夕法尼亚州立大学 (教育学)" } },
              { name: "赖老师", education: { master: "宾夕法尼亚大学 (教育科学)", bachelor: "纽约州立大学FIT (服装设计/艺术史)" } },
              { name: "王老师", education: { doctor: "多伦多大学 (教育)", master: "多伦多大学 (成人教育学)" } },
              { name: "易老师", education: { master: "南加利福尼亚大学 (TESOL)" } },
              { name: "严老师", education: { master: "宾夕法尼亚大学 (发展与教育心理学)", bachelor: "迈阿密大学 (音乐治疗)" } },
              { name: "李老师", education: { master: "宾夕法尼亚大学 (阅读/写作/读写研究)", bachelor: "华盛顿大学 (教育学)" } },
              { name: "黄老师", education: { master: "多伦多大学 (教育学)", bachelor: "UBC (亚洲语言与文化)" } },
              { name: "时老师", education: { master: "宾夕法尼亚大学 (Learning sciences and technology)", bachelor: "密歇根大学 (传播与新媒体)" } },
              { name: "徐老师", education: { master: "宾夕法尼亚大学 (学习科学与技术) & 华盛顿大学 (高等教育与领导力)" } },
              { name: "李老师", education: { master: "宾夕法尼亚大学 (ISHD 跨学科人类发展)", bachelor: "纽约大学 (教育学)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "杨老师", education: { master: "剑桥大学 (教育)", bachelor: "曼彻斯特大学 (社会学)" } },
              { name: "李老师", education: { master: "剑桥大学 (教育学)" } },
              { name: "王老师", education: { master: "牛津大学 (教育学) & 复旦大学 (哲学)" } },
              { name: "Cosmo 张老师", education: { master: "UCL (TESOL)", bachelor: "人大 (英语+艺术管理)" } },
              { name: "王老师", education: { master: "伦敦大学学院 (英语教育)", bachelor: "诺丁汉大学 (英语与应用语言学)" } },
              { name: "董老师", education: { master: "爱丁堡大学 (语言教育)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "Yerin", education: { master: "香港大学 (Information Technology in Education)" } },
              { name: "程老师", education: { master: "香港大学 (STEM教育)", bachelor: "香港大学 (数学)" } },
              { name: "黄老师", education: { master: "香港大学 (教育技术)", bachelor: "天津商业大学 (自动化)" } },
            ]
          }
        ]
      },
      {
        name: "法学",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "刘老师", education: { doctor: "西北大学 (JD)", master: "LSE (LLM)", bachelor: "北工大 (法学院)" } },
              { name: "Grace", education: { master: "康奈尔大学 (LLM法学)", bachelor: "211院校 (法学)" } },
              { name: "高老师", education: { master: "纽约大学 (法学)", bachelor: "华东政法大学 (法学)" } },
              { name: "高老师", education: { master: "宾夕法尼亚大学 (社会政策+法律)", bachelor: "UBC (心理学)" } },
              { name: "韩老师", education: { master: "宾夕法尼亚大学 (法学)", bachelor: "清华大学 (法学)" } },
              { name: "方老师", education: { master: "UCLA (法学)", bachelor: "对外经济贸易大学 (法学)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "孟老师", education: { master: "爱丁堡大学 (法学)", bachelor: "海南大学 (法学)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "韩老师", education: { master: "香港大学 (法学)", bachelor: "复旦大学 (法学)" } },
              { name: "罗老师", education: { master: "香港中文大学 (法学)", bachelor: "中南政法 (法学)" } },
              { name: "戚老师", education: { master: "香港中文大学 (法学-中国商法)", bachelor: "南开大学 (法学+政治学行政学)" } },
              { name: "徐老师", education: { doctor: "香港城市大学 (JD)", bachelor: "宁波大学 (英语专业)" } },
            ]
          }
        ]
      },
      {
        name: "公共政策管理 / 国际关系",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "王老师", education: { master: "芝加哥大学 (公共政策)", bachelor: "威斯康星麦迪逊 (社会学和经济学)" } },
              { name: "陆老师", education: { master: "宾夕法尼亚大学 (社会政策与社会管理)", bachelor: "爱荷华州立 (社会学+国际研究)" } },
              { name: "吕老师", education: { master: "哥伦比亚大学 (公共管理)" } },
              { name: "袁老师", education: { master: "布朗大学 (公共政策与公共管理)" } },
              { name: "Amber", education: { master: "加州伯克利 (公共政策)", bachelor: "电子科技大学 (经济学和战略商业)" } },
              { name: "李老师", education: { master: "哥伦比亚大学 (公共管理)", bachelor: "厦门大学 (国际经济与贸易)" } },
              { name: "史老师", education: { master: "哥伦比亚大学 (公共管理)", bachelor: "中南财经政法大学 (商务英语)" } },
              { name: "闫老师", education: { master: "宾夕法尼亚大学 (公共管理)", bachelor: "东北财经大学 (工商管理)" } },
              { name: "薛老师", education: { master: "JHU (国际关系)", bachelor: "华南师范大学 (管理科学)" } },
              { name: "刘老师", education: { master: "JHU (国际关系)", bachelor: "KCL (政治经济学)" } },
              { name: "陈老师", education: { master: "纽约大学 (国际事务与国际关系)", bachelor: "新泽西州立大学 (人力资源)" } },
              { name: "杨老师", education: { master: "南加利福尼亚大学 (公共外交)", bachelor: "四川外国语大学 (翻译)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "Summer", education: { master: "剑桥大学 (发展研究)", bachelor: "北京外国语大学 (外交学)" } },
              { name: "高老师", education: { master: "伦敦大学学院 (Political Analysis)" } },
              { name: "Stella", education: { master: "LSE (公共政策学)", bachelor: "浙江大学 (英语)" } },
              { name: "陈老师", education: { master: "LSE (公共政策与管理)", bachelor: "LSE (社会学)" } },
              { name: "黄老师", education: { master: "LSE (国际发展)", bachelor: "湖南大学 (英语语言文学)" } },
              { name: "彭老师", education: { master: "LSE (国际关系)", bachelor: "宁波诺丁汉大学 (国际事务与国际关系)" } },
              { name: "张老师", education: { master: "LSE (社会与公共传播)", bachelor: "南开大学 (广播电视)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "张老师", education: { master: "新加坡国立大学 (公共政策)", bachelor: "北师港浸会 (财务管理)" } },
              { name: "Harrison", education: { master: "新加坡南洋理工大学 (国际事务与国际关系)", bachelor: "澳门理工 (国际经济与贸易)" } },
            ]
          }
        ]
      },
      {
        name: "传媒",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "周老师", education: { master: "南加利福尼亚大学 (传媒管理)" } },
              { name: "唐老师", education: { master: "纽约大学 (媒体与传播学)", bachelor: "中国地质大学 (广播电视新闻学)" } },
              { name: "Yuwei Zhang", education: { master: "JHU (公共媒体关系)", bachelor: "康涅狄格大学 (人类发展与家庭科学)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "邹老师", education: { master: "LSE (战略传播)", bachelor: "中山大学 (行政管理)" } },
              { name: "张老师", education: { master: "LSE (社会与公共传播)", bachelor: "南开大学 (广播电视)" } },
              { name: "郭老师", education: { doctor: "伦敦大学学院 (文化传播与社会学)", master: "格拉斯哥大学 (心理学)" } },
              { name: "王老师", education: { master: "UCL (数字媒体-教育)", bachelor: "武汉大学 (广播电视学)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "王老师", education: { master: "香港大学 (创意传播)", bachelor: "上海外国语大学 (西班牙语)" } },
              { name: "李老师", education: { master: "香港中文大学 (全球传播)", bachelor: "山东大学 (新闻学)" } },
            ]
          }
        ]
      },
      {
        name: "社会学/ 人类学 / 心理学",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "华老师", education: { master: "宾夕法尼亚大学 (心理咨询与心理健康教育)", bachelor: "麦吉尔大学 (心理学)" } },
              { name: "刘老师", education: { master: "多伦多大学 (教育心理学)", bachelor: "多伦多大学 (经济和媒体)" } },
              { name: "卢老师", education: { master: "哥伦比亚大学 (量化社会科学)", bachelor: "南开大学 (材料化学+金融学)" } },
              { name: "Copper 辛老师", education: { master: "芝加哥大学 (人类学)", bachelor: "北京航空航天大学 (英语)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "孙老师", education: { master: "牛津大学 (犯罪学与刑事司法)", bachelor: "伦敦大学学院 (心理与语言学)" } },
              { name: "谈老师", education: { master: "牛津大学 (社会学与人口统计)", bachelor: "清华大学 (社会学+英语)" } },
              { name: "胡老师", education: { master: "牛津大学 (社会人类学) & 北大 (东南亚文化)" } },
              { name: "孙老师", education: { doctor: "剑桥大学 (心理学)", master: "密歇根大学 (认知神经科学)" } },
              { name: "Sammi", education: { master: "爱丁堡大学 (社会研究定量方向)", bachelor: "广东外语外贸大学 (金融学)" } },
              { name: "张老师", education: { doctor: "UCL (健康和教育心理)", master: "UCL (健康心理学)", bachelor: "爱丁堡 (心理学)" } },
              { name: "李老师", education: { master: "LSE (社会人类学)" } },
              { name: "岳老师", education: { master: "LSE (社会学)" } },
              { name: "张老师", education: { master: "LSE (社会研究方法)", bachelor: "西安交大 (社会学)" } },
              { name: "靳老师", education: { master: "伦敦大学学院 (社会研究方法理学)", bachelor: "KCL (社会科学)" } },
              { name: "艾老师", education: { master: "UCL (考古学和遗产)", bachelor: "杜伦大学 (考古学及博物馆学)" } },
              { name: "左老师", education: { master: "伦敦大学学院 (人类学)", bachelor: "KCL" } },
            ]
          }
        ]
      },
      {
        name: "语言 / 文学 / 哲学 / 区域研究",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "Caroline", education: { master: "哈佛大学 (哲学)" } },
              { name: "曹老师", education: { master: "加州伯克利分校 (英语)" } },
              { name: "Poppy 彭老师", education: { master: "杜克大学 (东亚研究)", bachelor: "武汉理工大学 (传播学)" } },
              { name: "张老师", education: { master: "哥伦比亚大学 (翻译)", bachelor: "南京大学 (英语)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "杨老师", education: { master: "牛津大学 (语言学及应用语言学) & 香港大学 (文学)", bachelor: "南京大学 (文学院)" } },
              { name: "Sophia 吴老师", education: { doctor: "纽卡斯尔 (翻译)", master: "华中师范大学 (翻译)", bachelor: "华中师范大学 (英汉翻译)" } },
              { name: "王老师", education: { master: "伦敦大学学院 (翻译研究)", bachelor: "天津城建大学 (翻译学)" } },
              { name: "郑老师", education: { doctor: "曼彻斯特大学 (意大利研究)", master: "东南大学 (艺术学理论)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "胡老师", education: { master: "香港大学 (美国研究)", bachelor: "东华大学 (英语)" } },
              { name: "Choi", education: { master: "香港大学 (应用语言学)", bachelor: "广东财经大学 (商务英语)" } },
              { name: "蒋老师", education: { master: "香港大学 (文学与文化研究)", bachelor: "北京师范大学 (英语)" } },
              { name: "朱老师", education: { master: "香港大学 (英语研究)" } },
              { name: "徐老师", education: { master: "香港大学 (中国语言文学)", bachelor: "哈尔滨工业大学 (汉语言文学)" } },
              { name: "李林老师", education: { master: "香港中文大学 (宗教研究)", bachelor: "中国石油大学 (英语)" } },
              { name: "葛老师", education: { master: "新加坡国立大学 (中国与东南亚文明)", bachelor: "杜克大学 (英语)" } },
              { name: "胡老师", education: { master: "新加坡国立大学 (中国语言文学)", bachelor: "南开大学 (中国语言文学)" } },
            ]
          }
        ]
      }
    ]
  },
  {
    name: "艺术与建筑类",
    subCategories: [
      {
        name: "建筑 / 城市规划",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "张老师", education: { master: "哈佛大学 (设计研究与城市设计)", bachelor: "浙江大学 (建筑学)" } },
              { name: "吴老师", education: { master: "哥伦比亚大学 (高级建筑设计)", bachelor: "浙江工业大学 (建筑学)" } },
              { name: "黄老师", education: { master: "康奈尔大学 (景观设计学)", bachelor: "北京林业大学 (园林)" } },
              { name: "方老师", education: { master: "加州伯克利 (建筑学)", bachelor: "重庆大学 (城乡规划)" } },
              { name: "杜老师", education: { master: "宾夕法尼亚大学 (建筑)", bachelor: "俄亥俄州立 (建筑)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "吕老师", education: { master: "伦敦大学学院 (全球城市化)" } },
              { name: "姜老师", education: { master: "伦敦大学学院 (智慧城市与城市分析)", bachelor: "南开大学 (城市管理学)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "邓老师", education: { master: "香港大学 (城市研究与住房管理)", bachelor: "北京交通大学 (城乡规划学)" } },
            ]
          }
        ]
      },
      {
        name: "艺术 / 电影 / 设计",
        regions: [
          {
            regionName: "美国",
            mentors: [
              { name: "张老师", education: { master: "华盛顿大学UW (人机交互)", bachelor: "美本 (信息科学)" } },
              { name: "高老师", education: { master: "哥伦比亚大学 (编导)", bachelor: "清华大学 (编导)" } },
              { name: "徐老师", education: { master: "哥伦比亚大学 (电影编剧及导演)" } },
              { name: "徐老师", education: { master: "马里兰帕克 (人机交互)", bachelor: "西北农林科技大学 (食品与安全)" } },
            ]
          },
          {
            regionName: "英国",
            mentors: [
              { name: "陆老师", education: { master: "伦敦艺术大学 (纯艺)", bachelor: "中国传媒大学 (广播电视编导)" } },
              { name: "凯老师", education: { master: "布里斯托大学 (电影与电视)", bachelor: "吉林艺术学院 (数字媒体设计)" } },
              { name: "李老师", education: { master: "格拉斯哥大学 (服装及面料设计)", bachelor: "浙江科技大学 (艺术设计服装设计)" } },
              { name: "秦老师", education: { master: "伦敦大学学院 (纪录片)", bachelor: "爱丁堡大学 (心理学)" } },
            ]
          },
          {
            regionName: "港新",
            mentors: [
              { name: "尹老师", education: { master: "新加坡国立大学 (艺术、企业与发展)", bachelor: "上海外国语大学 (广告学)" } },
            ]
          }
        ]
      }
    ]
  }
];
