const INSURANCE_PRODUCT_LIST_PROMPT = `生成一个保险产品列表页面，
作为一位潜在的保险购买者，我希望能够在保险公司的网页上看到所有的保险产品，以便我可以了解和比较各种选项。
  验收标准如下：
    AC1：用户能看到所有保险产品列表
    GIVEN：用户打开保险产品列表页面
    WHEN：页面加载完成
    THEN：用户看到所有可用的保险产品
    AC2: 用户能看到每个产品的头图
    GIVEN：用户查看保险产品列表
    WHEN：页面显示产品信息
    THEN：每个产品旁边展示其对应头图
    AC3：用户能根据保险类型过滤产品
    GIVEN：用户在保险产品列表页面
    WHEN：选择一个或多个保险类型来过滤产品
    THEN：列表展示用户选定类型的保险产品
    AC4：用户能根据价格范围过滤产品
    GIVEN：用户在保险产品列表页面
    WHEN：输入价格范围并提交过滤请求
    THEN：列表展示处于用户指定价格范围内的保险产品
    AC5：用户可以获取更多产品详情
    GIVEN：用户在保险产品列表页面
    WHEN：点击产品的“了解更多”按钮
    THEN：页面展示该产品的详细信息页
    AC6：用户使用过滤器后，产品列表即时刷新
    GIVEN：用户已经使用过滤条件查看列表
    WHEN：更改过滤条件并提交
    THEN：产品列表立即更新以显示匹配新过滤条件的产品
`;

const CAR_INSURANCE_ONLINE_CALCULATOR_PROMPT = `生成一个车险在线计算器页面，
作为一名车主，我希望通过保险公司的在线车险计算页面快速计算出我的车险费用，这样我就可以了解预算，并选择合适的保险计划。
验收标准如下：
    AC1: 用户能够输入车辆信息
    GIVEN：用户访问在线车险计算页面
    WHEN：用户输入车辆的详细信息
    THEN：系统接受输入并准备计算费用
    AC2：用户能够查看费用估算
    GIVEN：用户已输入所有必要的车辆信息
    WHEN：用户点击“计算费用”按钮
    THEN：系统显示不同保险计划的费用估算
    AC3: 用户能够查看保险计划详情
    GIVEN：用户看到费用估算
    WHEN：用户选择一个保险计划并点击“详情”
    THEN：系统展示所选保险计划的全面详情
    AC4: 用户能够联系客服
    GIVEN：用户有疑问或需要帮助
    WHEN：用户点击联系客服选项
    THEN：系统提供客服联系方式，如电话或在线聊天
`;

const PET_CARE_INSURANCE_PREMIUM_CALCULATION_PROMPT = `生成一个宠物养护险投保页面，
作为一位宠物主人，我希望能够通过平安保险的投保页面轻松地为我的宠物购买宠物养护险，以便当我的宠物生病或遭受意外时，我可以获得相应的经济补偿。
验收标准：
      AC1 用户能够访问投保页面
      GIVEN 用户打开投保链接
      WHEN 用户访问网站
      THEN 投保页面成功加载
      AC2 用户能够阅读投保须知和保险条款
      GIVEN 用户进入投保页面
      WHEN 用户点击查看投保须知和条款
      THEN 投保须知和条款内容清晰显示
      AC3 用户能够填写宠物信息
      GIVEN 用户阅读完投保须知
      WHEN 用户进入宠物信息填写环节
      THEN 系统提供相应表单以填写宠物信息
      AC4 用户能够选择合适的保险计划
      GIVEN 宠物信息填写完成
      WHEN 用户查看不同的保险计划
      THEN 系统展示不同保险计划的选项
      AC5 用户能够完成在线支付
      GIVEN 用户选择了保险计划
      WHEN 用户进入支付环节
      THEN 系统提供安全支付页面，并显示支付成功的提示
      AC6 用户能够收到保单
      GIVEN 用户完成支付
      WHEN 系统处理结束
      THEN 用户收到电子版保单的邮件或短信通知
`;

const ADULT_ACCIDENT_INSURANCE_PREMIUM_CALCULATION_PROMPT = `生成一个成人意外险投保页面，
作为一个潜在的保险购买者，我希望能够在投保页面上清晰地看到各种成人意外险的选项和详细信息，这样我可以根据自己的实际情况和需求选择最合适的保险计划，并顺利完成投保。
验收标准：
      AC1 用户可以浏览不同的保险计划
      GIVEN 用户访问成人意外险投保页面
      WHEN 页面加载完成
      THEN 展示不同的保险计划列表
      AC2 用户可以查看保险计划的详细信息
      GIVEN 用户点击一个保险计划
      WHEN 展开详细信息
      THEN 显示该保险计划的保障范围、特别说明等详情
      AC3 用户可以选择并开始投保流程
      GIVEN 用户决定购买一个计划
      WHEN 点击该计划的“投保”按钮
      THEN 引导用户进入投保表单填写页面
      AC4 用户可以填写投保信息
      GIVEN 用户进入投保表单页面
      WHEN 正确填写所有必要的投保信息
      THEN “提交”按钮变为可用状态
      AC5 用户可以完成支付并收到保单
      GIVEN 用户提交投保申请
      WHEN 完成支付流程
      THEN 接收到投保确认和保单信息
`;

const EMPLOYERS_LIABILITY_INSURANCE_PREMIUM_CALCULATION_PROMPT = `生成一个雇主责任险投保页面，
作为一名公司管理者或人力资源专员， 我希望能够在平安保险的在线平台上快速测算雇主责任保险的保费， 这样我可以预算相应的成本，并决定是否购买该保险。
  验收标准:
      AC1 用户成功访问保费测算页面
      GIVEN 用户打开测算页面
      THEN 系统显示保费测算表单
      AC2 用户输入必要信息并获得保费测算结果
      GIVEN 用户位于保费测算页面
      WHEN 用户输入所有必填信息并提交表单
      THEN 系统展示保费测算结果
      AC3 用户查看详细保险条款
      GIVEN 用户查看到保费测算结果
      WHEN 用户点击“了解详情”
      THEN 系统显示保险产品的详细条款
      AC4 用户决定购买并进入购买流程
      GIVEN 用户查看到保费测算结果
      WHEN 用户点击“直接购买”
      THEN 系统引导用户进入购买流程
      AC5 用户在任何时候选择退出
      GIVEN 用户在测算页面或详细信息页面
      WHEN 用户点击“退出”或“返回”
      THEN 系统确认用户操作并返回上一页
`;

const PLATEAU_TRAVEL_INSURANCE_PREMIUM_CALCULATION_PROMPT = `生成一个高原旅游险投保页面，
作为一名旅客，我希望能够通过平安保险的在线平台快速选择和购买高原旅游险，以确保我的旅行安全受到保障。
验收标准：
      AC1 信息填写与提交
      GIVEN 用户访问投保界面
      WHEN 填写个人信息并提交
      THEN 信息被系统接受且验证无误
      AC2 选择保险方案
      GIVEN 用户信息已通过验证
      WHEN 选择一个保险方案
      THEN 方案被系统记录且展示总价格
      AC3 完成支付
      GIVEN 用户已选择保险方案
      WHEN 进行支付操作
      THEN 支付成功且收到保险凭证
      AC4 邮箱接收凭证
      GIVEN 支付成功
      WHEN 系统自动发送保险凭证
      THEN 用户收到保险凭证的电子邮件
`;

const HOSPITAL_INSURANCE_PREMIUM_CALCULATION_PROMPT = `生成一个住院保险投保页面，
作为一位潜在的保险买家，我希望通过一个在线界面轻松快速地购买住院保险，以确保在住院时能得到财务支持。
验收标准:
      AC1 用户可以浏览保险计划
      GIVEN 用户访问投保界面
      WHEN 在保险计划页面上
      THEN 看到不同的保险计划选项
      AC2 用户可以选择一个保险计划
      GIVEN 用户在保险计划页面
      WHEN 选择一个计划并点击“下一步”
      THEN 被带到填写个人信息的界面
      AC3 用户可以输入个人信息
      GIVEN 用户在填写信息界面
      WHEN 输入所有必要的个人信息
      THEN 能够点击“支付”进行下一步
      AC4 用户可以选择支付方式
      GIVEN 用户输入完个人信息后
      WHEN 在支付方式选择界面
      THEN 选择一个支付选项
      AC5 用户可以完成支付并获得保险凭证
      GIVEN 用户选择了支付方式
      WHEN 完成支付操作
      THEN 收到保单确认凭证并有明确的成功提示
`;

const FOOD_SAFETY_LIABILITY_INSURANCE_DETAILS_PROMPT = `生成一个食品安全责任险详情页面，
作为一名食品行业商家，我需要在保险公司的网站上查看食品安全责任险的详细信息，包括保险的保障内容、保费计算、理赔服务和操作指南等，以便我能够了解保险的具体条款并决定是否购买以保护我的业务。
验收标准：
      AC1 商家能够查看保险的保障内容
      GIVEN 商家进入食品安全责任险详情页面
      WHEN 浏览“保障内容”部分
      THEN 页面详细展示了保险的保障范围和不包括的风险
      AC2 商家了解保险费用
      GIVEN 商家进入食品安全责任险详情页面
      WHEN 查看“保险费用”
      THEN 页面提供保费计算器或说明，帮助商家了解费用
      AC3 商家能够查看理赔服务流程
      GIVEN 商家进入食品安全责任险详情页面
      WHEN 导航到“理赔服务”部分
      THEN 页面清晰列出理赔流程的每个步骤和所需文件
      AC4 商家能够通过页面获取帮助
      GIVEN 商家有疑问或需要帮助
      WHEN 查找页面上的联系方式
      THEN 页面提供了一键拨号功能或在线聊天支持
      AC5 商家能够在移动设备上浏览页面
      GIVEN 商家使用移动设备访问网站
      WHEN 打开食品安全责任险详情页面
      THEN 页面内容适配屏幕大小，确保易于阅读和导航
`;

const OVERSEAS_STUDY_ACCIDENT_INSURANCE_DETAILS_PROMPT = `生成一个境外留学意外伤害保险详情页面，
作为一名即将出国留学的学生，我希望能够在保险公司的网站上详细了解境外留学意外伤害保险的所有相关信息，包括哪些情况是被保险覆盖的，保险费用是多少，以及如何进行理赔，这样我可以决定是否购买并确保在海外学习期间的安全。

验收标准：
      AC1 学生能够查看保险产品的覆盖范围
      GIVEN 学生进入境外留学意外伤害保险详情页面
      WHEN 导航到“覆盖范围”部分
      THEN 页面展示包括意外伤害、紧急医疗等在内的详细覆盖信息
      AC2 学生了解保费详情
      GIVEN 学生进入境外留学意外伤害保险详情页面
      WHEN 查看“保费详情”
      THEN 页面展示不同计划的保费和支付方式
      AC3 学生能够查看详细的理赔流程
      GIVEN 学生进入境外留学意外伤害保险详情页面
      WHEN 导航到“理赔流程”部分
      THEN 页面清晰列出从申请到支付的所有理赔步骤和所需文件
      AC4 学生能够找到联系方式并获取帮助
      GIVEN 学生有关于保险的疑问
      WHEN 导航到页面底部的联系方式
      THEN 页面提供客服电话、电子邮件和在线聊天功能的联系信息
`;

const INSURANCE_CLAIM_INFORMATION_INQUIRY_PROMPT = `生成一个保险理赔信息查询页面，
作为一名保险客户，我希望能够在保险公司的网站上使用理赔查询页面来查询我的理赔信息，包括理赔进度、理赔金额和相关理赔文档，这样我可以随时了解我的理赔状态和下一步需要什么行动。

验收标准：
      AC1 客户能够成功登录理赔查询页面
      GIVEN 客户已经进入保险公司网站并找到理赔查询页面
      WHEN 客户输入有效的理赔编号和身份验证信息
      THEN 系统验证信息无误后，显示理赔进度、金额和文档下载链接
      AC2 客户查看到实时的理赔进度
      GIVEN 客户已成功登录理赔查询页面
      WHEN 客户查看自己的理赔进度
      THEN 页面展示实时的、详细的理赔进度信息
      AC3 客户查看到理赔金额
      GIVEN 客户已成功登录理赔查询页面
      WHEN 客户查看自己的理赔金额
      THEN 页面显示已批准的理赔金额和已支付的金额
      AC4 客户能够下载相关的理赔文档
      GIVEN 客户已成功登录理赔查询页面
      WHEN 客户选择并点击下载理赔文档的链接
      THEN 系统提供文档的安全下载，客户成功下载文件
`;

export const USER_STORY_MAP = {
  insurance_product_list: INSURANCE_PRODUCT_LIST_PROMPT,
  car_insurance_online_calculator: CAR_INSURANCE_ONLINE_CALCULATOR_PROMPT,
  insurance_claim_information_inquiry:
    INSURANCE_CLAIM_INFORMATION_INQUIRY_PROMPT,
  overseas_study_accident_insurance_details:
    OVERSEAS_STUDY_ACCIDENT_INSURANCE_DETAILS_PROMPT,
  food_safety_liability_insurance_details:
    FOOD_SAFETY_LIABILITY_INSURANCE_DETAILS_PROMPT,
  hospital_insurance_premium_calculation:
    HOSPITAL_INSURANCE_PREMIUM_CALCULATION_PROMPT,
  plateau_travel_insurance_premium_calculation:
    PLATEAU_TRAVEL_INSURANCE_PREMIUM_CALCULATION_PROMPT,
  employers_liability_insurance_premium_calculation:
    EMPLOYERS_LIABILITY_INSURANCE_PREMIUM_CALCULATION_PROMPT,
  adult_accident_insurance_premium_calculation:
    ADULT_ACCIDENT_INSURANCE_PREMIUM_CALCULATION_PROMPT,
  pet_care_insurance_premium_calculation:
    PET_CARE_INSURANCE_PREMIUM_CALCULATION_PROMPT,
};
