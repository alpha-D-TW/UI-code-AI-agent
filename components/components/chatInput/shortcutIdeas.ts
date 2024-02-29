// export const shortcutIdeas = [
//   {
//     id: "InsuranceProductCategories",
//     label: "Insurance product list",
//     value: `生成一个保险产品列表页面，保险产品列表页面它包含了以下几个主要部分：
//       头部区域（Header Section）:
//       头部区域分为上下两部分，
//             上面部分有以下元素：
//                    品牌标志：显示公司或品牌的标志，以增强品牌识别度，居左展示。
//                    搜索框：提供一个方便的方式让用户搜索特定产品
//                    登录与注册按钮：网站需要用户登录才能访问某些功能，提供登录和注册选项
//       下面部分包括导航菜单，导航菜单包括返回首页、所有产品、意外保险、企业保险、旅行保险等链接以便用户可以根据自己的需求浏览产品,导航菜单背景色为主题色，字体颜色为白色，内容居中显示。

//       内容区域（Prodeuct List Section）
//             包含多个产品卡片，垂直水平显示在页面上，使用flex布局，一行展示三张卡片，卡片背景色为白色，并且包含阴影来突出显示每个产品，每一个产品卡片需要依次展示以下信息：
//             产品图片：每个产品都应该有一个清晰的图片，以便用户可以直观地了解产品的外观。
//             产品名称：显示产品的名称，以便用户可以识别，字体加粗，例如“平安e生保”。 。
//             产品描述：提供简要的产品描述，介绍产品的关键特性和优势。
//             产品状态：显示在卡片的右上角，如“热卖”，“畅销”等状态
//            价格：显示产品的价格信息，可以包括原价和特价（如果适用）。
//            操作按钮：每个产品应该有一个明显的操作按钮，如“立即投保”或“了解详情”,按钮的颜色使用主题色
//       产品价格与操作按钮在同一行展示，并位于卡片底部
//       页脚区域（Footer Section）
//       页脚区域位于页面最底部，元素包括以下部分，内容居中显示，分为上下两部分，上面部分分为3列，其中第一列展示的是链接导航提供与网站其他页面的链接，如关于我们、联系我们、常见问题等；第二列展示的是隐私政策和服务条款：提供与用户隐私和使用条款相关的链接；第三列展示公司公众号图片；下面部分为版权声明：页脚中央带有“版权所有 © 平安保险”字样以及版权信息：显示网站的版权信息，包括公司名称和年份
//       输出要求：
//        1.使用ant-design组件库，并使用定制的主题时需要参考上述描述中的全局样式规范所描述的配置来完成设计,在入口文件中定义<ConfigProvider theme={config}></ConfigProvider>来配置主题
//        2.完整返回html代码
//        3.样式不定义在行内元素上，需要定义样式名并在对应的的样式文件中文件编写样式
//       4.对于需要展示的数据，帮我mock出来
//        5.对于需求描述中的色彩描述如主题色使用cinfig配置中的colorPrimary，使用定制主题中config声明的颜色`,
//   },
//   {
//     id: "InsuranceProductDetail",
//     label: "Insurance product list",
//     value: `生成一个保险产品详情页面, 需求如下：
//         Header：垂直居中
//             第一行：（元素水平排列）
//         品牌标志：图片，居左展示。
//         搜索框：文本框
//         登录、注册：两个按钮，均居右展示。
//             第二行：背景色为主题色，字体颜色为白色，内容居中显示。
//         导航菜单：链接，包括返回首页、所有产品、意外保险、企业保险、旅行保险等。

//         Body：宽度70%，内边距20px，居中
//         Section1：高度200px，加阴影效果
//         产品介绍图片
//         Section2：卡片展示，分为3列，水平排列，背景白色，加阴影效果
//         第1列：
//         适用人群：如：18-45岁
//         保险期限：如： 10年
//         第2列：
//         销售范围：如：中国大陆
//         保单形式：电子保单
//         第3列：
//         价格：如：44.2元起，加粗，主题色
//         立即投保：按钮，主题色
//         Section3：加阴影效果
//         标题: 产品特色，居左，背景灰色
//         内容: 图片
//         Section4：加阴影效果
//         标题: 保障计划，居左，背景灰色
//         内容: 图片
//         Section5：加阴影效果
//         标题: 常见问题，居左，背景灰色
//         内容: 图片
//         Section6：加阴影效果
//         标题: 投保须知，居左，背景灰色
//         内容: 文本，如包括被保险人的年龄和职业限制，以及保险事故的地理范围。

//         Footer：以浅灰色为背景色，居中展示
//         链接：品牌荣誉，帮助中心，关于平安，客服信息，版权声明。`,
//   },
//   {
//     id: "InsurancePriceCalculate",
//     label: "Insurance Price Calculate",
//     value: `生成一个保险投保页面，投保页信息包括：
//       Header：垂直居中
//       - 第一行：（元素水平排列）
//         - 品牌标志：图片，居左展示。
//         - 搜索框：文本框
//         - 登录、注册：两个按钮，均居右展示。
//       - 第二行：背景色为主题色，字体颜色为白色，内容居中。
//         - 导航菜单：链接，包括返回首页、所有产品、意外保险、企业保险、旅行保险等。

//       Body：加阴影，居中显示，宽度70%，内边距16px
//       - 标题：产品名称，居中突出显示
//       - section1: （表格，表头加粗，背景灰色）
//         | 保障责任 | 自定义报价 |
//         | 意外伤害医疗保险责任 | 文本输入下拉框，默认填充：1万元 |
//         | 身故伤残保险责任 | 文本输入下拉框，默认填充：1万元|
//         | 意外伤害身故和残疾 | 文本输入下拉框，默认填充：10万元 |
//         | 意外和疾病住院 | 文本输入下拉框，默认填充：1万元 |
//       - section2: (每行放两个文本框,标题：投保人，居左，加粗，背景灰色)
//         - 姓名：文本输入框，证件信息：文本输入框
//         - 电话：电话输入框， 邮箱：邮箱输入框
//         - 地址：文本输入框
//       - section3:(每行放两个文本框,标题：被保险人，居左，加粗，背景灰色)
//         - 为谁投保：单选按钮组（本人，子女，父母）
//         - 姓名：文本输入框，证件信息：文本输入框
//         - 电话：电话输入框， 邮箱：邮箱输入框
//         - 地址：文本输入框
//       - 分割线：灰色， 加粗
//       - Section4：水平布局，居右
//         - 保费总计：文本加粗，橙色，比如：18000元
//         - 立即投保：按钮，橙色

//       Footer：背景灰色，居中
//       - 链接：品牌荣誉，帮助中心，关于平安，客服信息，版权声明。`,
//   },
// ];

export const shortcutIdeas = [
  {
    id: "insurance_product_list",
    label: "Insurance product list",
    value: `生成一个保险产品列表页面`,
  },
  {
    id: "car_insurance_online_calculator",
    label: "Car Insurance Online Calculator",
    value: `生成一个车险在线计算器页面`,
  },
  {
    id: "insurance_claim_information_inquiry",
    label: "Insurance claim information inquiry",
    value: `生成一个保险理赔信息查询页面`,
  },
  {
    id: "overseas_study_accident_insurance_details",
    label: "Overseas study accident insurance details",
    value: `生成一个境外留学意外伤害保险详情页面`,
  },
  {
    id: "food_safety_liability_insurance_details",
    label: "Food safety liability insurance details",
    value: `生成一个食品安全责任险详情页面`,
  },
  {
    id: "hospital_insurance_premium_calculation",
    label: "Hospital insurance premium calculation",
    value: `生成一个住院保险投保页面`,
  },
  {
    id: "plateau_travel_insurance_premium_calculation",
    label: "Plateau travel insurance premium calculation",
    value: `生成一个高原旅游险投保页面`,
  },
  {
    id: "employers_liability_insurance_premium_calculation",
    label: "Employers liability insurance premium calculation",
    value: `生成一个雇主责任险投保页面`,
  },
  {
    id: "adult_accident_insurance_premium_calculation",
    label: "Adult accident insurance premium calculation",
    value: `生成一个成人意外险投保页面`,
  },
  {
    id: "pet_care_insurance_premium_calculation",
    label: "Pet care insurance premium calculation",
    value: `生成一个宠物养护险投保页面`,
  },
];
