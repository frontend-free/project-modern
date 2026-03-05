/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ModelImplEmbeddingData {
  /** 生成的1024/*维向量。 */
  embedding?: number[];
  /** 结果在输入列表中的索引。 */
  index?: number;
  /** open_ai的object, tongyiqianwen的type */
  object?: string;
}

export interface ModelImplEmbeddingUsage {
  /** 输入的token数目， 本次请求输入内容的 Token 数目。 */
  prompt_tokens?: number;
  /** 总的token消耗数 */
  total_tokens?: number;
}

export interface ModelImplLlmEmbeddingResponse {
  data?: ModelImplEmbeddingData[];
  /** 请求失败的错误码。请求成功时不会返回此参数 */
  error_code?: string;
  /** 请求失败的详细信息。请求成功时不会返回此参数 */
  error_msg?: string;
  model?: string;
  usage?: ModelImplEmbeddingUsage;
}

export interface ModelImplRerankDocument {
  /** 文档原文 */
  text?: string;
}

export interface ModelImplRerankOutput {
  /** 排序结果列表。按 relevance_score 从高到低排列 */
  results?: ModelImplRerankResult[];
}

export interface ModelImplRerankResponse {
  /** 请求失败的错误码。请求成功时不会返回此参数 */
  code?: string;
  /** 请求失败的详细信息。请求成功时不会返回此参数 */
  message?: string;
  /** 任务输出信息 */
  output?: ModelImplRerankOutput;
  /** 请求唯一标识。可用于请求明细溯源和问题排查。 */
  request_id?: string;
  /** 输出信息统计 */
  usage?: ModelImplRerankUsage;
}

export interface ModelImplRerankResult {
  /** 文档原文对象。仅在请求参数 return_documents 为 true 时返回。结构为 {"text": "文档原文"} */
  document?: ModelImplRerankDocument;
  /** 表示该结果对应于输入 documents 列表中的原始索引位置 */
  index?: number;
  /** 该文档与查询的语义相关性得分，取值范围为 0.0 到 1.0。分数越高，相关性越强 */
  relevance_score?: number;
}

export interface ModelImplRerankUsage {
  /** 本次请求消耗的总 Token 数量 */
  total_tokens?: number;
}

export interface ServiceAsrFileToTextReq {
  /** doubao:字节豆包模型，Tongyi-Qianwen:通义千文 */
  factory?: string;
  /** 必须是mav | mp3文件地址 （与mediadata二选一） */
  file_url?: string;
  /** 必须是mav | mp3文件的二进制数据流 */
  media_data?: number[];
  /** 模型，doubao的时候不用填，其他要填 */
  model?: string;
}

export interface ServiceAsrFileToTextRes {
  /** 消耗时长 */
  duration?: number;
  /** 识别结果 */
  text_content?: string;
}

export interface ServiceEmbedLlmRequest {
  factory?: string;
  model_name?: string;
  question?: string[];
}

export interface ServiceFileRes {
  /** 文件访问地址 */
  url?: string;
}

export interface ServiceInviteUserReq {
  /** email地址 */
  email: string;
}

export interface ServiceLoginReq {
  /** email地址 */
  email: string;
  /** 密码，加密后的串 */
  password: string;
}

export interface ServiceLoginRes {
  access_token?: string;
  /** api_token */
  api_token?: string;
  /** 登录返回令牌 */
  authorization?: string;
  /** 头像 */
  avatar?: string;
  /** 颜色模式 */
  color_schema?: string;
  /** 邮箱 */
  email?: string;
  /** 主键id */
  id?: string;
  /** 是否活跃 */
  is_active?: string;
  /** 是否认证 */
  is_authenticated?: string;
  /** 是否超级用户 */
  is_superuser?: boolean;
  /** 语言类型 */
  language?: string;
  /** 最后登录时间 */
  last_login_time?: string;
  /** 登录渠道 */
  login_channel?: string;
  /** 昵称 */
  nickname?: string;
  /** 状态 */
  status?: string;
  /** 当前的租户id */
  tenant_id?: string;
  /** 时区 */
  timezone?: string;
}

export interface ServiceMediaTokenRes {
  token?: string;
}

export type ServiceMediaWsRes = object;

export type ServiceObjectResp = ServiceObjectRespStruct;

export interface ServiceObjectRespStruct {
  value?: object;
}

export interface ServiceRegisterReq {
  /** email地址 */
  email: string;
  /** 昵称 */
  nickname: string;
  /** 密码 */
  password: string;
}

export interface ServiceRerankLlmRequest {
  documents?: string[];
  factory?: string;
  model_name?: string;
  question?: string;
  return_documents?: boolean;
  top_p?: number;
}

export interface ServiceSimpleLlmResponse {
  /** 大模型回复内容 */
  content?: string;
}

export interface ServiceSpaceUserRes {
  /** 头像 */
  avatar?: string;
  /** 邮箱 */
  email?: string;
  /** 是否活跃 */
  is_active?: string;
  /** 是否认证 */
  is_authenticated?: string;
  /** 是否超级用户 */
  is_superuser?: boolean;
  /** 加入时间 */
  join_date?: string;
  /** 语言类型 */
  language?: string;
  /** 最后登录时间 */
  last_login_time?: string;
  /** 登录渠道 */
  login_channel?: string;
  /** 昵称 */
  nickname?: string;
  /** 角色 */
  role?: string;
  /** 状态 */
  status?: string;
  /** 时区 */
  timezone?: string;
  /** 用户ID */
  user_id?: string;
}

export interface ServiceSseLlmRequest {
  factory?: string;
  files?: string[];
  /** default: 0.5 */
  frequency_penalty?: number;
  /** default: not setter */
  max_token?: number;
  /** 其他扩展信息传递，比如enable_thinking:true */
  meta_data?: Record<string, any>;
  model_name?: string;
  /** default: not setter */
  presence_penalty?: number;
  question?: string;
  sys_prompt?: string;
  /** 热度, default: 0.2 */
  temperature?: number;
  /** default: 0.75 */
  top_p?: number;
}

export interface ServiceSseReconnectRequest {
  /** 对话ID */
  conversation_id?: string;
  /** 最后的消息ID，为空时返回当前对话的所有历史 */
  last_event_id?: string;
}

export type ServiceSwaggerRes = Record<string, any>;

export interface ServiceTenantConfigReq {
  /** ASR 模型 ID */
  asr_id?: string;
  /** 描述 */
  description?: string;
  /** 嵌入模型 ID */
  embd_id?: string;
  /** 图像转文本模型 ID */
  img2txt_id?: string;
  /** 大语言模型 ID */
  llm_id?: string;
  /** 名称 */
  name?: string;
  /** 租户 ID */
  tenant_id: string;
}

export interface ServiceTenantIdReq {
  /** 租户 ID */
  tenant_id: string;
}

export interface ServiceTenantInfoRes {
  /** ASR 模型 ID */
  asr_id?: string;
  /** 创建时间 */
  create_date?: string;
  /** 创建时间 */
  create_time?: number;
  /** 描述 */
  description?: string;
  /** 嵌入模型 ID */
  embd_id?: string;
  /** 图像转文本模型 ID */
  img2txt_id?: string;
  /** 大语言模型 ID */
  llm_id?: string;
  /** 解析器 ID 列表 */
  parser_ids?: string;
  /** Reranker 模型 ID */
  rerank_id?: string;
  /** 角色 */
  role?: string;
  /** 租户 ID */
  tenant_id?: string;
  /** 名称 */
  tenant_name?: string;
  /** TTS 模型 ID（可为空） */
  tts_id?: string;
}

export interface ServiceTestLlmRequest {
  factory?: string;
  files?: string[];
  /** default: 0.5 */
  frequency_penalty?: number;
  /** default: not setter */
  max_token?: number;
  /** 其他扩展信息传递，比如enable_think:true */
  meta_data?: Record<string, any>;
  model_name?: string;
  /** default: not setter */
  presence_penalty?: number;
  question?: string;
  sys_prompt?: string;
  /** 热度, default: 0.2 */
  temperature?: number;
  /** 定义租户 */
  tenant_id?: string;
  /** default: 0.75 */
  top_p?: number;
}

export interface ServiceTestPageSearchRes {
  page_number?: number;
  page_size?: number;
  records?: TableLlmFactories[];
  total?: number;
}

export interface ServiceToolsInstanceCommonReq {
  /** pluginID, 插件的ID */
  plugin_instance_id?: number;
}

export interface ServiceToolsInstanceListReq {
  /** pluginID, 插件的ID */
  plugin_id?: number;
  /** 插件名称：ExeSQL */
  plugin_name?: string;
}

export interface ServiceUpdateUserReq {
  /** 头像 */
  avatar?: string;
  /** 邮箱地址 */
  email?: string;
  /** 是否激活 */
  is_active?: string;
  /** 是否为匿名用户 */
  is_anonymous?: string;
  /** 是否已验证 */
  is_authenticated?: string;
  /** 是否为超级用户 */
  is_superuser?: boolean;
  /** 上次登录时间 */
  last_login_time?: string;
  /** 登录渠道 */
  login_channel?: string;
  /** 新密码 */
  new_password?: string;
  /** 昵称 */
  nickname?: string;
  /** 用户密码 */
  password?: string;
  /** 用户状态 */
  status?: string;
}

export interface ServiceUserIdReq {
  /** 用户 ID */
  user_id: string;
}

export type SvcAiChatRes = object;

export interface SvcModelAddBotFavoriteReqModel {
  /** 助手唯一标识 */
  bot_marking?: string;
}

export interface SvcModelAddBusinessComponentsCategoryReq {
  /** 分类描述 */
  description: string;
  /** 分类名称 */
  name: string;
  /** 权限开放模式:空间可见、仅自己可见：tenant、only_me */
  permission_type: string;
}

export interface SvcModelAddFeedbackReq {
  /** 助手类型：Agent:智能体，AgentWorkflow:Agent工作流 */
  bot_type: string;
  /** 反馈内容 */
  content: string;
  /** 聊天id */
  log_id: number;
  /** 是否已发布, true:是，false:否 */
  online_state?: boolean;
}

export interface SvcModelAddTagLibraryInfoReq {
  /** 标签唯一标识 */
  code: string;
  /** 标签描述 */
  description?: string;
  /** 枚举值：["正常","异常","维修中"] */
  enum_value?: string;
  /** 主键ID，编辑是必填 */
  id?: number;
  /** 标签名称 */
  name: string;
  /** 适用范围：手动输入 */
  range?: string;
  /** 来源类型：手动输入 */
  source_type?: string;
  /** 标签库管理ID，tag_library.id */
  tag_library_id: number;
  /** 标签类型：手动输入 */
  type?: string;
  /** 单位 */
  unit?: string;
  /** 更新策略：手动输入 */
  update_strategy?: string;
  /** 标签值类型：枚举、布尔、数值、时间戳、字符串 */
  value_type?: string;
}

export interface SvcModelAddTagLibraryReq {
  /** 标签描述 */
  description: string;
  /** 标签icon */
  icon?: string;
  /** 主键ID，编辑是必填 */
  id?: number;
  /** 标签名称 */
  name: string;
}

export interface SvcModelAgentAnalysisInfoResModel {
  /** 智能体名称 */
  agent_name?: string;
  /** 平均会话互动数 */
  average_chat_count?: number;
  /** 会话数 */
  chat_count?: number;
  /** 消息数 */
  message_count?: number;
  /** 互动用户数 */
  user_count?: number;
}

export interface SvcModelAgentCallConfigModel {
  /** Agent配置列表 */
  agent_config_list?: SvcModelAgentCallListConfigModel[];
  /** 是否开启 */
  open_flag?: boolean;
}

export interface SvcModelAgentCallListConfigModel {
  /** Agent标识，bot_marking */
  bot_marking?: string;
  /** 相关参数配置 */
  variables?: SvcModelAgentVariableModel[];
}

export interface SvcModelAgentVariableModel {
  /** 变量名称 */
  param_name?: string;
  /** 设置值 */
  value_set?: string;
  /** 变量值使用类型，Default:默认值，Fixed:固定值 */
  value_use_type?: string;
}

export interface SvcModelAiCrawlerHtmlDetail {
  content?: string;
  next_links?: SvcModelNextLinks[];
  next_pages?: string[];
}

export interface SvcModelAiCrawlerRequest {
  /** 爬取深度，比如：3 */
  crawler_deep?: number;
  /** AI提示词，比如需要爬取内容总结方向的描述，主题等，如果为空，则仅返回当前页的内容，不做深入 */
  prompt?: string;
  /** 检索的关键词，URL与其只能二选一 */
  search_keyword?: string;
  /** 简要主题 */
  topic?: string;
  /** 需要爬取的Url */
  url?: string;
}

export interface SvcModelAiCrawlerResponse {
  content?: string;
  details?: SvcModelAiCrawlerHtmlDetail[];
}

export interface SvcModelAiJobLogPageReq {
  /** 结束日期，格式：yyyy-MM-dd */
  end_time?: string;
  /** 定时调度ID */
  job_id: string;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
  /** 开始日期，格式：yyyy-MM-dd */
  start_time?: string;
  /** 执行状态@1:成功@2:失败 */
  status?: number;
}

export interface SvcModelAiJobLogPageRes {
  page_number?: number;
  page_size?: number;
  /** 对象列表 */
  records?: SvcModelAiJobLogResponse[];
  total?: number;
}

export interface SvcModelAiJobLogResponse {
  /** 创建时间 */
  created_at?: string;
  /** 日志ID */
  id?: number;
  /** 调度结果 */
  result?: string;
  /** 执行状态@1:成功@2:失败 */
  status?: number;
  /** 调度参数 */
  trigger_param?: string;
}

export interface SvcModelAiJobPageReq {
  /** 应用场景，@1:bot @2:Agentflow */
  applicable_scenarios?: number;
  /** 结束日期，格式：yyyy-MM-dd */
  end_time?: string;
  /** 当前执行状态 @1:未执行@2:执行中 */
  execute_status?: number;
  /** 是否是资源中心 */
  is_resource?: boolean;
  /** 搜索字段 */
  keywords?: string;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
  /** 开始日期，格式：yyyy-MM-dd */
  start_time?: string;
  /** 任务开启状态 @1:开启@2:停止 */
  status?: number;
  /** 租户id */
  tenant_id?: string;
  /** 触发类型：1.单次；2.每天；3.周期性；4.Cron表达式； */
  trigger_type?: number;
}

export interface SvcModelAiJobPageRes {
  page_number?: number;
  page_size?: number;
  /** 对象列表 */
  records?: SvcModelAiJobResponse[];
  total?: number;
}

export interface SvcModelAiJobReq {
  /** 任务调度的唯一ID */
  job_id: string;
}

export interface SvcModelAiJobResponse {
  /** 来源 */
  agent_name?: string;
  /** 应用场景，@1:bot @2:Agentflow */
  applicable_scenarios?: number;
  /** 创建时间 */
  created_at?: string;
  /** 创建人 */
  created_by?: string;
  /** 当前状态 @1:未执行@2:执行中 */
  execute_status?: number;
  /** 定时调度ID */
  job_id?: string;
  /** 定时调度名称 */
  name?: string;
  /** 下次执行时间 */
  next_run_at?: string;
  /** 场景ID */
  scenarios_id?: string;
  /** 调度配置 */
  schedule_config_source?: string;
  /** 任务状态 @1:开启@2:停止 */
  status?: number;
  /** 空间名称 */
  tenant_name?: string;
  /** 变量参数 */
  trigger_param?: string;
  /** 触发类型：1.单次；2.每天；3.周期性；4.Cron表达式； */
  trigger_type?: number;
  /** 更新时间 */
  updated_at?: string;
  /** 更新人 */
  updated_by?: string;
}

export interface SvcModelAllChunkInfoResponse {
  /** 是否可用：0.否；1是； */
  available_int?: number;
  /** 该对象的唯一标识符 */
  chunk_id?: string;
  /** 内容 */
  content_with_weight?: string;
  /** 文档 ID */
  doc_id?: string;
  /** 文档名称关键字 */
  docnm_kwd?: string;
  /** 图像 ID */
  image_id?: string;
  /** 关键词列表 */
  important_kwd?: object;
  /** 位置信息列表 */
  positions?: object;
  /** 问题关键字列表 */
  question_kwd?: object;
}

export interface SvcModelAllDocPageReq {
  /** 搜索字段 */
  keywords?: string;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
  /** 文档类型：doc、pdf、xlsx、png、jpg.... */
  type?: string;
}

export interface SvcModelAllDocPageResponse {
  page_number?: number;
  page_size?: number;
  /** 数据集文件对象列表 */
  records?: SvcModelAllDocumentResponse[];
  total?: number;
}

export interface SvcModelAllDocumentResponse {
  /** 创建的日期时间 */
  create_date?: string;
  /** 创建的日期时间 */
  create_time?: number;
  /** 创建人 */
  created_by?: string;
  /** 文档id */
  id?: string;
  /** 知识库id */
  kb_id?: string;
  /** 知识库名称 */
  kb_name?: string;
  /** 文档名称 */
  name?: string;
  /** 文档大小(单位:B，转成MB) */
  size?: number;
  /** 文档类型 */
  type?: string;
}

export interface SvcModelBotCallToolSimpleLog {
  /** LLM调用时的整体消耗 */
  LlmCallMessage?: SvcModelLlmCallReturnSimpleLogModel;
  /** 子类/工具调用 */
  children?: SvcModelBotCallToolSimpleLog[];
  /** 输出，Json结构 */
  content?: object;
  /** 错误信息/失败信息 */
  error_message?: string;
  /** 结束时间 */
  finish_time?: string;
  /** 首字符回复耗时 */
  first_token_time_in_ms?: number;
  /** 开始时间 */
  message_time?: string;
  /** 调用工具名称 */
  plugin_name?: string;
  /** 请求处理时长（毫秒） */
  process_time_in_ms?: number;
  /** 状态，成功/失败 */
  status?: boolean;
  /** 工具类型，非展现用 */
  tool_type?: string;
  /** 标识Id */
  uid?: string;
  /** 工具英文名，非展现用 */
  unit_name?: string;
  /** 输入，Json结构 */
  variables?: object;
}

export interface SvcModelBotChatLikeReqModel {
  /** 聊天记录ID */
  chat_log_id: number;
  /** 点踩时补充的评论 */
  comment?: string;
  /** 1点赞 0取消 -1点踩 */
  like_type?: number;
}

export interface SvcModelBotChatSessionHistoryModel {
  /** 创建时间 */
  created_at?: string;
  /** 会话的标识 */
  history_id?: string;
  /** 会话数据库ID，删除需使用 */
  session_id?: number;
  /** 会话名称 */
  session_name?: string;
  /** 变量输入,也可在更新会话信息提交 */
  variable_json?: Record<string, any>;
}

export interface SvcModelBotDeleteReqModel {
  /** 助手标识BotMarking */
  bot_marking?: string;
}

export interface SvcModelBotDetailModel {
  /** Agent配置 */
  agent_call_config?: SvcModelAgentCallConfigModel;
  /** bot模型配置 */
  bot_llm_config?: SvcModelBotLlmConfigModel;
  /**
   * 助手唯一标识(自动生成)，更新时必须
   * @example "助手唯一标识(自动生成)，更新时必须"
   */
  bot_marking?: string;
  /** 助手模型id */
  bot_model_id: number;
  /**
   * 助手名称
   * @example "助手名称"
   */
  bot_name: string;
  /** 插件配置 */
  bot_plugins_detail?: SvcModelBotPluginDetail[];
  /** 助手类型，Agent:助手, Workflow:工作流 */
  bot_type?: string;
  /** bot变量 */
  bot_variable?: SvcModelInputParam[];
  /** 业务组件配置详情 */
  business_components_config?: SvcModelBusinessComponentsConfigDetail;
  /** 分类id */
  category?: string;
  /** 上下文携带轮数 */
  context_round?: number;
  /** 创建时间 */
  created_at?: string;
  /** 创建人 */
  created_by?: string;
  /**
   * 简介
   * @example "简介"
   */
  description?: string;
  /** 对话设置 */
  dialogue_setting?: SvcModelDialogueSettingsConfig;
  /**
   * icon链接
   * @example "icon链接"
   */
  icon?: string;
  /** 定时调度配置 */
  job_config?: SvcModelBotJobConfigReqModel[];
  /** 知识库配置详情 */
  knowledge_detail?: SvcModelBotKnowledgeDetail;
  /**
   * 提示词
   * @example "提示词"
   */
  prompt: string;
  /** 状态 'DRAFT:草稿','OFFLINE:已下线','ONLINE:已上线','UPDATE:有更新' */
  status?: string;
  /** 租户ID */
  tenant_id?: string;
  /** 更新时间 */
  updated_at?: string;
  /** 更新人 */
  updated_by?: string;
  /** 视觉配置 */
  vision_config?: SvcModelVisionConfigModel;
  /** 工作流配置 */
  workflow_config?: SvcModelWorkflowBaseConfigModel;
}

export interface SvcModelBotDetailReqModel {
  /** 助手标识BotMarking */
  bot_marking?: string;
}

export interface SvcModelBotFavoriteResModel {
  /** 助手唯一标识 */
  bot_marking?: string;
  /** 助手名称 */
  bot_name?: string;
  /** 助手类型，Agent:助手，Workflow:工作流，AgentWorkflow:Agent工作流，其他情况查全部 */
  bot_type?: string;
  /** 分类ID */
  category?: string;
  /** 创建时间 */
  created_at?: string;
  /** 简介 */
  description?: string;
  /** icon链接 */
  icon?: string;
}

export interface SvcModelBotJobConfigReqModel {
  /** 定时任务的提示词 */
  bot_prompt_str?: string;
  /** 定时任务的预设问题 */
  bot_question_str?: string;
  /** 周期性筛选的时间[Monday:周一,Tuesday:周二,Wednesday:周三,Thursday:周四,Friday:周五,Saturday:周六,Sunday:周日] */
  cyclic_selected_week_day?: string[];
  /** 变量值配置JSON,如{"name": "张三", age: 100} */
  job_variable_config?: Record<string, any>;
  /** 定时器名称 */
  name?: string;
  /** 触发时间，Once:yyyy-MM-dd HH:mm:ss, EveryDay: HH:mm:ss, Cyclic: HH:mm:ss， Cron: 0/5 * * * * * */
  trigger_time?: string;
  /** 触发类型，Once:执行一次,EveryDay:每天执行,Cyclic:周期性执行,Cron:Cron表达式执行 */
  trigger_type?: string;
}

export interface SvcModelBotKbAddReq {
  /** bot标识 */
  bot_marking: string;
  /** 知识库id#助手配置-知识库列表(未添加)接口返回的id */
  kb_id: string;
}

export interface SvcModelBotKbIdReq {
  /** bot绑定知识库的主键id（关系表id）#助手配置-知识库列表(已添加)接口返回的id */
  bot_kb_id: string;
}

export interface SvcModelBotKbInfoResponse {
  /** 知识库图片 */
  avatar?: string;
  /** 描述 */
  description?: string;
  /** bot绑定知识库的主键id（关系表id） */
  id?: string;
  /** 知识库id */
  kb_id?: string;
  /** 知识库名称 */
  name?: string;
}

export interface SvcModelBotKbListReq {
  /** bot标识 */
  bot_marking: string;
  /** 搜索字段 */
  keywords?: string;
}

export interface SvcModelBotKbRetrieveConfResponse {
  /** 知识库图片 */
  avatar?: string;
  /** 检索设置对象 */
  conf?: SvcModelRetrieveConfResponse;
  /** 描述 */
  description?: string;
  /** 模型名称 */
  embd_id?: string;
  /** bot绑定知识库的主键id（关系表id） */
  id?: string;
  /** 知识库id */
  kb_id?: string;
  /** 知识库名称 */
  name?: string;
}

export interface SvcModelBotKbUpdateReq {
  /** bot标识 */
  bot_marking: string;
  /** 检索设置对象 */
  conf?: SvcModelRetrieveConfResponse;
  /** 知识库id */
  kb_id: string;
}

export interface SvcModelBotKnowledgeDetail {
  /** 是否引用归属：true/false */
  is_refer?: boolean;
  /** 知识库配置 */
  knowledge_config_list?: SvcModelKnowledgeConfigDetailModel[];
  /** 强制走知识库，默认“非” */
  must_use_first: boolean;
}

export interface SvcModelBotListQueryReqModel {
  /** bot名称like查询 */
  bot_name?: string;
  /** 助手类型，Agent:助手，Workflow:工作流，其他情况查全部 */
  bot_type?: string;
  /** 分类id */
  category?: string;
  /** 页码 */
  page_number?: number;
  /** 每页条数 */
  page_size?: number;
}

export interface SvcModelBotListQueryResModel {
  page_number?: number;
  page_size?: number;
  records?: SvcModelBotSimpleModel[];
  total?: number;
}

export interface SvcModelBotLlmConfigModel {
  /** 存在惩罚 */
  exists_punish?: number;
  /** 1:开启存在惩罚 */
  exists_punish_enabled?: number;
  /** 频率惩罚 */
  frequency_punish?: number;
  /** 1:开启频率惩罚 */
  frequency_punish_enabled?: number;
  /** 交互方式, 选项["chat","image2text","tts"] */
  interaction_method?: string;
  /** json_schema，这是旧的，后面移除 */
  json_schema?: string;
  /** 模型工厂名称 */
  llm_factory?: string;
  /** 最大标记 */
  max_sign?: number;
  /** 1:开启最大标记 */
  max_sign_enabled?: number;
  /** 扩展配置 */
  meta_data?: Record<string, any>;
  /** ID          int64   `json:"bot_model_id"`                          // 助手模型id，更新必须 */
  model_id?: number;
  /** 模型名称 */
  model_name?: string;
  /** 模型类型 */
  model_type?: string;
  /** JSON参数定义，出参Schema */
  output_param_schema?: SvcModelInputParam[];
  /** 思维方式：Default:默认，ReAct:ReAct，Thinking:Thinking，废弃 */
  reasoning_type?: string;
  /** 回复方式：1 text; 2 json, 3 json_schema */
  reply?: number;
  /** 1:开启回复方式 */
  reply_enabled?: number;
  /** 热度 */
  temperature?: number;
  /** 1:开启热度 */
  temperature_enabled?: number;
  /** Top P */
  top_p?: number;
  /** 1:开启Top N */
  top_p_enabled?: number;
}

export interface SvcModelBotMarketReqModel {
  /** bot名称like查询 */
  bot_name?: string;
  /** 助手类型，Agent:助手，Workflow:工作流，AgentWorkflow:Agent工作流，AgentAll:包括Agent跟AgentWorkflow，为空时查全部 */
  bot_type?: string;
  /** 分类id */
  category?: string;
  /** 页码 */
  page_number?: number;
  /** 每页条数 */
  page_size?: number;
}

export interface SvcModelBotOnlineDetailReqModel {
  /** 线上bot唯一标识 */
  bot_marking?: string;
}

export interface SvcModelBotOnlineSimpleDetailModel {
  /** 历史会话 */
  bot_chat_session_history?: SvcModelBotChatSessionHistoryModel[];
  /**
   * 助手唯一标识(自动生成)，更新时必须
   * @example "助手唯一标识(自动生成)，更新时必须"
   */
  bot_marking?: string;
  /**
   * 助手名称
   * @example "助手名称"
   */
  bot_name: string;
  /** 助手类型，Agent:助手, Workflow:工作流，AgentWorkflow:Agent工作流 */
  bot_type?: string;
  /** bot变量 */
  bot_variable?: SvcModelInputParam[];
  /**
   * 分类id
   * @example "分类id"
   */
  category?: string;
  /**
   * 简介
   * @example "简介"
   */
  description?: string;
  /** 对话设置 */
  dialogue_setting?: SvcModelDialogueSettingsConfig;
  /**
   * icon链接
   * @example "icon链接"
   */
  icon?: string;
  /** 是否已收藏 */
  is_favorite?: boolean;
  /** 视觉配置 */
  vision_config?: SvcModelVisionConfigModel;
}

export interface SvcModelBotPluginConfigReqModel {
  /** 插件基础配置JSON,如{"name": "张三", age: 100} */
  plugin_config?: Record<string, any>;
  /** 插件ID */
  plugin_id?: number;
  /** 插件绑定的实例ID */
  plugin_instance_id?: number;
}

export interface SvcModelBotPluginDetail {
  /** 插件logo图片 */
  avatar?: string;
  /** 插件描述 */
  description?: string;
  /** 插件名字，可重复 */
  display_name?: string;
  /** 插件基础配置JSON,如{"name": "张三", age: 100} */
  plugin_config?: Record<string, any>;
  /** 插件ID */
  plugin_id?: number;
  /** 插件绑定的实例ID */
  plugin_instance_id?: number;
}

export interface SvcModelBotPluginExecMessageModel {
  /** 消息内容 */
  content?: object;
  /** 插件耗时，只有结束时值>0 */
  cost?: number;
  /** 执行最终结果，true:成功，false：失败 */
  end_state?: boolean;
  /** 消息时间 */
  message_time?: string;
  /** 插件执行失败信息 */
  plugin_error?: string;
  /** 插件名称 */
  plugin_name?: string;
  /** 工具调用参数 */
  variables?: object;
}

export interface SvcModelBotPromptGenReq {
  /** @example "原提示词，必传" */
  origin_prompt: string;
}

export interface SvcModelBotPublishReqModel {
  /** 助手标识BotMarking */
  bot_marking?: string;
}

export interface SvcModelBotResModel {
  /** 助手唯一标识(自动生成)，更新时必须 */
  bot_marking?: string;
  /** 助手名称 */
  bot_name?: string;
}

export interface SvcModelBotSimpleModel {
  /**
   * 助手唯一标识(自动生成)，更新时必须
   * @example "助手唯一标识(自动生成)，更新时必须"
   */
  bot_marking?: string;
  /**
   * 助手名称
   * @example "助手名称"
   */
  bot_name: string;
  /** 助手类型，Agent:助手，Workflow:工作流，AgentWorkflow:Agent工作流，其他情况查全部 */
  bot_type?: string;
  /**
   * 分类id
   * @example "分类id"
   */
  category?: string;
  /** 创建时间 */
  created_at?: string;
  /** 创建人 */
  created_by?: string;
  /**
   * 简介
   * @example "简介"
   */
  description?: string;
  /**
   * ModelID      string `json:"bot_model_id" form:"model_id" binding:"required"`            // 助手模型id
   * ModelFactory string `json:"model_factory" form:"model_factory" binding:"required"`      // 助手模型厂家名称
   * ModelName    string `json:"model_name" form:"model_name" binding:"required"`            //使用的模型名称
   * @example "icon链接"
   */
  icon?: string;
  /** 入参Schema */
  input_param_schema?: SvcModelInputParam[];
  /** 出参Schema */
  output_param_schema?: SvcModelInputParam[];
  /** 状态 'DRAFT:草稿','OFFLINE:已下线','ONLINE:已上线','UPDATE:有更新 */
  status?: string;
  /** 更新时间 */
  updated_at?: string;
  /** 更新人 */
  updated_by?: string;
}

export interface SvcModelBotStoreReqModel {
  /** 多Agent协助配置 */
  agent_call_config?: SvcModelAgentCallConfigModel;
  /** bot模型配置 */
  bot_llm_config?: SvcModelBotLlmConfigModel;
  /**
   * 助手唯一标识(自动生成)，更新时必须
   * @example "助手唯一标识(自动生成)，更新时必须"
   */
  bot_marking?: string;
  /** 助手模型id */
  bot_model_id?: number;
  /**
   * 助手名称
   * @example "助手名称"
   */
  bot_name: string;
  /** 插件配置 */
  bot_plugins_config?: SvcModelBotPluginConfigReqModel[];
  /** bot变量 */
  bot_variable?: SvcModelInputParam[];
  /** 业务组件配置 */
  business_components_config?: SvcModelBusinessComponentsConfigReqModel;
  /** 分类id */
  category?: string;
  /**
   * 简介
   * @example "简介"
   */
  description?: string;
  /** 对话设置 */
  dialogue_setting?: SvcModelDialogueSettingsConfig;
  /**
   * icon链接
   * @example "icon链接"
   */
  icon?: string;
  /** 定时调度配置 */
  job_config?: SvcModelBotJobConfigReqModel[];
  /** 知识库配置 */
  knowledge_config?: SvcModelKnowledgeConfigReqBaseModel;
  /**
   * 提示词
   * @example "提示词"
   */
  prompt?: string;
  /** 视觉配置 */
  vision_config?: SvcModelVisionConfigModel;
  /** 工作流配置 */
  workflow_config?: SvcModelWorkflowBaseConfigModel;
}

export interface SvcModelBusinessComponentsCategoryModel {
  /** 分类描述 */
  description?: string;
  /** 主键id */
  id?: number;
  /** 分类名称 */
  name?: string;
}

export interface SvcModelBusinessComponentsCategoryReq {
  /** 分类名称 */
  name?: string;
}

export interface SvcModelBusinessComponentsConfigDetail {
  /** 业务组件配置 */
  business_components_list?: SvcModelBusinessComponentsConfigResModel[];
  /** 是否开启 */
  open_flag?: boolean;
}

export interface SvcModelBusinessComponentsConfigReqModel {
  /** 业务组件配置 */
  business_components_list?: SvcModelBusinessComponentsReqModel[];
  /** 是否开启 */
  open_flag?: boolean;
}

export interface SvcModelBusinessComponentsConfigResModel {
  /** 组件标识 */
  components_identity?: string;
  /** 组件描述 */
  description?: string;
  /** 组件名称 */
  display_name?: string;
  /** 组件图标 */
  icon?: string;
}

export interface SvcModelBusinessComponentsListQueryReq {
  /** 业务组件名称 */
  display_name?: string;
}

export interface SvcModelBusinessComponentsModel {
  /** 基础配置的JSON结构，包括超时、URL等 */
  base_config?: string;
  /** API类型时，body的json字符串 */
  body_data_config?: string;
  /** 请求body的格式: none form-data x-www-form-urlencoded json raw binary */
  body_type?: string;
  /** 业务组件code */
  business_code?: string;
  /** 分类ID */
  category_id?: number;
  /** 分类名称 */
  category_name?: string;
  /** 组件标识 */
  components_identity?: string;
  /** 组件类型：API、Python */
  components_type?: string;
  /** 创建时间 */
  created_at?: string;
  /** 创建人 */
  created_by?: string;
  /** 描述 */
  description?: string;
  /** 业务组件名称 */
  display_name?: string;
  /** python类型时的执行环境ID，当为Python类型时必传 */
  env_id?: string;
  /** API类型时，header配置的JSON结构 */
  header_config?: string;
  /** 图标 */
  icon?: string;
  /** 主键id */
  id?: number;
  /** 输入参数schema格式的JSON结构 */
  input_param_schema?: string;
  /** 输出参数schema格式的JSON结构 */
  output_param_schema?: string;
  /** 权限范畴:空间可见、仅自己可见：tenant only_me */
  permission_type?: string;
  /** python类型时python的源代码 */
  python_code?: string;
  /** python类型时的文件名，可为空 */
  python_file_name?: string;
  /** 租户id */
  tenant_id?: string;
  /** 更新时间 */
  updated_at?: string;
  /** 更新人 */
  updated_by?: string;
  /** API类型时，url参数配置的JSON结构 */
  url_params_config?: string;
}

export interface SvcModelBusinessComponentsModelReq {
  /** API类型时，基础配置的JSON结构，包括超时、URL等#示例：{"http_type":"POST","api_url":"http://aaa.com","connection_time_out":12,"read_timeout":12,"write_timeout":12,"auth_config":{"auth_type":"none","header":"token","api_key":"xxxxxxx","bearer":false}} */
  base_config?: string;
  /** API类型时，body的json字符串#示例：[{"desc": "", "name": "name", "type": "string", "value": "张三", "is_ref": false, "not_null": true, "ref_name": "", "selector": [], "child_param": [], "ref_cell_id": "", "default_value": "", "array_value_type": ""}, {"desc": "", "name": "jobArr", "type": "array", "value": "", "is_ref": false, "not_null": true, "ref_name": "", "selector": [], "child_param": [{"desc": "", "value": "开发人员", "is_ref": false, "not_null": true, "ref_name": "", "selector": [], "basicType": true, "child_param": [], "ref_cell_id": "", "default_value": "", "array_value_type": ""}, {"desc": "", "value": "产品人员", "is_ref": false, "not_null": true, "ref_name": "", "selector": [], "basicType": true, "child_param": [], "ref_cell_id": "", "default_value": "", "array_value_type": ""}], "ref_cell_id": "", "default_value": "", "array_value_type": "string"}, {"desc": "", "name": "workObj", "type": "object", "value": "", "is_ref": false, "not_null": true, "ref_name": "", "selector": [], "child_param": [{"desc": "", "name": "tenantId", "type": "string", "value": "886eb92e21d111f08440e1d96204be68", "is_ref": false, "not_null": true, "ref_name": "", "selector": [], "child_param": [], "ref_cell_id": "", "default_value": "", "array_value_type": ""}, {"desc": "", "name": "age", "type": "integer", "value": "18", "is_ref": false, "not_null": true, "ref_name": "", "selector": [], "child_param": [], "ref_cell_id": "", "default_value": "", "array_value_type": ""}], "ref_cell_id": "", "default_value": "", "array_value_type": ""}] */
  body_data_config?: string;
  /** API类型时，请求body的格式: none form-data x-www-form-urlencoded json raw binary */
  body_type?: string;
  /** 分类ID */
  category_id: number;
  /** 组件标识 */
  components_identity: string;
  /** 组件类型：API、Python */
  components_type: string;
  /** 描述 */
  description?: string;
  /** 业务组件名称 */
  display_name: string;
  /** python类型时，执行环境ID，当为Python类型时必传 */
  env_id?: string;
  /** API类型时，header配置的JSON结构#示例：[{"name":"Content-Type","value":"application/json"},{"name":"token","value":"Bearer 123123123"}] */
  header_config?: string;
  /** 图标 */
  icon?: string;
  /** 主键id */
  id?: number;
  /** python类型时，输入参数schema格式的JSON结构#示例：[{"name":"param1","type":"string","value":"value1"},{"name":"param2","type":"string","value":"value2"}] */
  input_param_schema?: string;
  /** python/API类型共用，输出参数schema格式的JSON结构#示例：[{"desc":"响应内容","name":"result","type":"string"},{"desc":"响应状态码","name":"code","type":"string"}] */
  output_param_schema?: string;
  /** python类型时，python的源代码#示例：def main(param1: str, param2: str) -> dict:\n    return {\n        \"result\": param1 + param2,\n        \"code\": 200\n    } */
  python_code?: string;
  /** python类型时，文件名，可为空 */
  python_file_name?: string;
  /** API类型时，url参数配置的JSON结构#示例：[{"name":"param1","type":"string","value":"value1"},{"name":"param2","type":"number","value":123}] */
  url_params_config?: string;
}

export interface SvcModelBusinessComponentsPageQueryReq {
  /** 业务分类id */
  category_id?: number;
  /** 组件类型：API、Python */
  components_type?: string;
  /** 业务组件名称 */
  display_name?: string;
  /** 页码 */
  page_number?: number;
  /** 每页条数 */
  page_size?: number;
}

export interface SvcModelBusinessComponentsPageQueryResp {
  page_number?: number;
  page_size?: number;
  records?: SvcModelBusinessComponentsModel[];
  total?: number;
}

export interface SvcModelBusinessComponentsReqModel {
  /** 组件标识 */
  components_identity?: string;
}

export interface SvcModelBusinessPlanPromptAddRes {
  /** 分类id */
  category_id?: number;
  /** 组件id数组#示例：[1,2,3] */
  components_ids?: string;
  /** 规划描述 */
  description?: string;
  /** 主键id */
  id?: number;
  /** 规划名称 */
  name?: string;
  /** 规划prompt */
  prompt?: string;
}

export interface SvcModelBusinessPlanPromptInfoReq {
  /** 主键id */
  id: number;
}

export interface SvcModelBusinessPlanPromptPageReq {
  /** 业务分类id */
  category_id?: number;
  /** 规划名称 */
  name?: string;
  /** 页码 */
  page_number: number;
  /** 每页条数 */
  page_size: number;
}

export interface SvcModelBusinessPlanPromptPageRes {
  page_number?: number;
  page_size?: number;
  records?: SvcModelBusinessPlanPromptRes[];
  total?: number;
}

export interface SvcModelBusinessPlanPromptRes {
  /** 分类id */
  category_id?: number;
  /** 分类名称 */
  category_name?: string;
  /** 组件id数组#示例：[1,2,3] */
  components_ids?: string;
  /** 创建时间 */
  created_at?: string;
  /** 创建人 */
  created_by?: string;
  /** 规划描述 */
  description?: string;
  /** 主键id */
  id?: number;
  /** 规划名称 */
  name?: string;
  /** 规划prompt */
  prompt?: string;
  /** 更新时间 */
  updated_at?: string;
  /** 更新人 */
  updated_by?: string;
}

export interface SvcModelCallMcpToolReq {
  /** id, mcp_server的ID */
  id?: number;
  /** 请求参数 */
  params?: Record<string, any>;
  /** 工具名 */
  tool_name?: string;
}

export interface SvcModelCallMcpToolRes {
  /** 工具调用真实数据返回 */
  call_tool_result?: string;
  /** 解析输出结构 */
  output_schema?: SvcModelInputParam[];
}

export interface SvcModelCallWorkflowExecuteReq {
  /** 运行时需要的变量参数值，JSON格式 */
  variables_config?: Record<string, any>;
  /** 工作流标识，唯一,新增时不传 */
  workflow_marking?: string;
}

export interface SvcModelCategorySimpleModel {
  /** 分类名称 */
  category_name?: string;
  /** 分类id */
  id?: string;
}

export interface SvcModelChatFileIdReq {
  /** 文档列表中的id */
  id: number;
}

export interface SvcModelChatFilePageReq {
  /** 文件类型 */
  file_type?: string;
  /** 搜索字段 */
  keywords?: string;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
}

export interface SvcModelChatFilePageRes {
  page_number?: number;
  page_size?: number;
  /** 对话文档对象列表 */
  records?: SvcModelChatFileResponse[];
  total?: number;
}

export interface SvcModelChatFileResponse {
  /** Agent名称 */
  agent_name?: string;
  /** 创建时间 */
  created_at?: string;
  /** 创建人 */
  created_by?: string;
  /** 文件类型 */
  file_type?: string;
  /** 知识库id */
  id?: number;
  /** 文件名 */
  name?: string;
  /** 文档大小(单位:B，转成MB) */
  size?: number;
}

export interface SvcModelChatMessageModel {
  /** bot标识 */
  bot_marking?: string;
  /** 对话ID，用于内部传递 */
  conversation_id?: string;
  /** 订阅消息类型，默认空为全部，填写message时则仅返回message类型信息，具体其他类型请参考文档 */
  events?: string[];
  /** 问题涉及的文件URL列表，字符串数组 */
  files?: string[];
  /** historyId 寻上下文绑定使用 */
  history_id?: string;
  /** 聊天中涉及的变量数据（初始化变量数据） */
  init_variables?: Record<string, any>;
  /** agent名称，临时使用 */
  name?: string;
  /** 是否线上bot，默认false, true走已发布的bot */
  online?: boolean;
  /** 用户bot中提问 */
  question: string;
  /** 场景类型：evaluation:评测场景， other: 非评测场景 */
  source_type?: string;
  /** 聊天类型：Agent:助手， AgentWorkflow: Agent工作流 */
  type?: string;
}

export interface SvcModelChunkAddReq {
  /** 内容 */
  content: string;
  /** 数据集文档id */
  doc_id: string;
  /** 重要关键词 */
  important_keywords?: string[];
  /** 知识库id */
  kb_id: string;
  /** 问题 */
  questions?: string[];
}

export interface SvcModelChunkDelReq {
  /** 块id数组 */
  chunk_ids: string[];
  /** 数据集文档id */
  doc_id: string;
  /** 知识库id */
  kb_id: string;
}

export interface SvcModelChunkImageReq {
  /** 块图片，直接拿块列表中的image_id字段 */
  image_id: string;
  /** 知识库id */
  kb_id: string;
}

export interface SvcModelChunkInfoResponse {
  /** 是否可用：0.否；1是； */
  available?: string;
  /** 内容 */
  content?: string;
  /** 文档 ID */
  doc_id?: string;
  /** 文档名称关键字 */
  docnm_kwd?: string;
  /** 该对象的唯一标识符 */
  id?: string;
  /** 图像 ID */
  image_id?: string;
  /** 关键词列表 */
  important_keywords?: object;
  /** 位置信息列表 */
  positions?: object;
  /** 问题 */
  questions?: object;
}

export interface SvcModelChunkMergeReq {
  /** 块id数组（块-分页列表中返回的id） */
  chunk_ids: string[];
  /** 数据集文档id */
  doc_id: string;
  /** 知识库id */
  kb_id: string;
  /** 合并方式：1.删除旧块；2.保留旧块； */
  merge_method: number;
}

export interface SvcModelChunkPageReq {
  /** 是否可用：0.否；1是； */
  available?: string;
  /** 数据集文档id */
  doc_id: string;
  /** 知识库id */
  kb_id: string;
  /** 搜索字段 */
  keywords?: string;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
}

export interface SvcModelChunkPageResponse {
  page_number?: number;
  page_size?: number;
  /** 块对象列表 */
  records?: SvcModelChunkInfoResponse[];
  total?: number;
}

export interface SvcModelChunkRetrievalDocResponse {
  /** 命中块数 */
  count?: number;
  /** 文档id */
  doc_id?: string;
  /** 文档名称 */
  doc_name?: string;
}

export interface SvcModelChunkRetrievalPageResponse {
  /** Pivot文档块 */
  chunks?: SvcModelPivotChunkResponse[];
  /** 检索后相关的文档列表 */
  doc_list?: SvcModelChunkRetrievalDocResponse[];
  page_number?: number;
  page_size?: number;
  /** 块检索后对象列表 */
  records?: SvcModelChunkRetrievalResponse[];
  total?: number;
}

export interface SvcModelChunkRetrievalReq {
  /**
   * SimilarityThreshold    float64              `json:"similarity_threshold"`                              // 相似度阈值
   * VectorSimilarityWeight float64              `json:"vector_similarity_weight"`                          // 关键字相似度权重
   * RerankID               string               `json:"rerank_id"`                                         // Rerank模型名称
   * TopK                   int                  `json:"top_k"`                                             // Top-K
   * PageNumber             int64                `json:"page_number" form:"page_number" binding:"required"` // 页码
   * PageSize               int64                `json:"page_size" form:"page_size" binding:"required"`     // 数量
   */
  conf?: SvcModelPivotKnowledgeBaseRetrievalConfig;
  /** 数据集文档id数组 */
  doc_ids?: string[];
  /** 知识库id数组 */
  kb_ids: string[];
  /** 检索问题 */
  question: string;
}

export interface SvcModelChunkRetrievalResponse {
  /** 文档的内容 */
  content?: string;
  /** 文档的内容 */
  content_ltks?: string;
  /** 文档id */
  doc_id?: string;
  /** 文档名称关键字 */
  docnm_kwd?: string;
  /** 文档的高亮部分 */
  highlight?: string;
  /** 检索id */
  id?: string;
  /** 存储图像的标识符 */
  image_id?: string;
  /** 关键词列表 */
  important_keywords?: object;
  /** 知识库id */
  kb_id?: object;
  /** 位置信息列表 */
  positions?: object;
  /** 混合相似度 */
  similarity?: number;
  /** 关键词相似度 */
  term_similarity?: number;
  /** 向量相似度 */
  vector_similarity?: number;
}

export interface SvcModelChunkUpdateReq {
  /** 是否可用：0.否；1是； */
  available: string;
  /** 块id数组 */
  chunk_ids: string[];
  /** 内容 */
  content?: string;
  /** 数据集文档id */
  doc_id: string;
  /** 重要关键词 */
  important_keywords?: string[];
  /** 知识库id */
  kb_id: string;
  /** 问题 */
  questions?: string[];
}

export interface SvcModelCondaEnvReq {
  /** conda环境id */
  env_id: string;
}

export interface SvcModelCondaEnvResponse {
  /** conda环境id */
  conda_env_id?: string;
  /** 依赖安装 */
  init_command?: string;
  /** 环境命名 */
  space_name?: string;
  /** 路径 */
  space_path?: string;
}

export interface SvcModelCreateBotSessionReqModel {
  /** 助手唯一标识,必填 */
  bot_marking: string;
  /** 会话HistoryId,开启聊天后会返回，必填 */
  history_id?: string;
  /** 是否线上会话，NO:否，YES:是 */
  online_state?: string;
  /** 会话名称，使用输入的聊天内容前20字符 */
  session_name?: string;
  /** VariableJson []VariableDescribeModel `json:"variable_json"`                       //变量输入,也可在更新会话信息提交 */
  variables_config?: Record<string, any>;
}

export interface SvcModelCreateCondaEnvReq {
  /** 依赖安装 */
  init_command?: string;
  /** 环境命名 */
  space_name: string;
  /** 路径 */
  space_path: string;
}

export interface SvcModelCreateCondaReq {
  /** 依赖安装 */
  init_command?: string;
  /** 环境命名 */
  space_name: string;
  /** 路径 */
  space_path: string;
}

export interface SvcModelCsvGenerateScriptModel {
  /** 已选择的数据集id数组 */
  dataset_id: string[];
  /** 用户提示词 */
  prompt: string;
  /** 选择模型 */
  select_model_config: SvcModelBotLlmConfigModel;
  /** 已选择的数据库表id数组 */
  table_id: string[];
}

export interface SvcModelDeleteBotFavoriteReqModel {
  /** 助手唯一标识 */
  bot_marking?: string;
}

export interface SvcModelDeleteBotSessionReqModel {
  /** 助手唯一标识 */
  bot_marking?: string;
  /** 会话数据库ID */
  session_id?: number;
}

export interface SvcModelDialogueSettingsConfig {
  /**
   * 编辑的权限。英文逗号分隔
   * @example "编辑的权限"
   */
  edit_permissions?: string;
  /** 聊天历史消息大小，默认为0，前端默认为3 */
  history_msg_num?: number;
  /** 输入联想数量，结合知识库使用 */
  input_link_limit?: number;
  /** 日志采集率0~100整数 */
  log_capture_rate?: number;
  /** 消息解析模式1:解析文本，2:不解析文本 */
  message_parse_model?: number;
  /**
   * 开场预设问题
   * @example "开场预设问题"
   */
  opening_question?: string;
  /**
   * 开场白文案
   * @example "开场白文案"
   */
  opening_text?: string;
}

export interface SvcModelDocChangeStatusReq {
  /** 文档列表中的id */
  id: string;
  /** 启用状态：0.否；1.是； */
  status: string;
}

export interface SvcModelDocCreateReq {
  /** 文档访问路径 */
  doc_url?: string;
  /** 知识库id */
  kb_id: string;
  /** 文档名称 */
  name: string;
  /** 解析器对象 */
  parser_config?: SvcModelParserConfig;
}

export interface SvcModelDocDelReq {
  /** ids */
  ids: string[];
  /** 知识库id */
  kb_id: string;
}

export interface SvcModelDocKbDocIdReq {
  /** id */
  id: string;
  /** 知识库id */
  kb_id: string;
}

export interface SvcModelDocListReq {
  /** 文档类型：doc、virtual(空文档) */
  doc_type?: string;
  /** 知识库id */
  kb_id: string;
  /** 搜索字段 */
  keywords?: string;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
}

export interface SvcModelDocListResponse {
  page_number?: number;
  page_size?: number;
  /** 数据集文件对象列表 */
  records?: SvcModelDocumentResponse[];
  total?: number;
}

export interface SvcModelDocUpdateReq {
  /** 文档id */
  id: string;
  /** 知识库id */
  kb_id: string;
  /** 文件名称 */
  name?: string;
  /** 知识库页面排名 */
  pagerank?: number;
  /** 解析器对象 */
  parser_config?: SvcModelParserConfig;
  /** 解析方法 */
  parser_id?: string;
}

export interface SvcModelDocUploadReq {
  /** 上传的文件流二进制数组 */
  file?: string;
  /** 知识库id */
  kb_id: string;
  /** URL地址 */
  url?: string;
}

export interface SvcModelDocumentResponse {
  /** 数据块数量 */
  chunk_num?: number;
  /** 创建的日期时间 */
  create_date?: string;
  /** 创建的日期时间 */
  create_time?: number;
  /** 创建人 */
  created_by?: string;
  /** 文档id */
  id?: string;
  /** 知识库id */
  kb_id?: string;
  /** 位置信息 */
  location?: string;
  /** 文档名称 */
  name?: string;
  /** 与解析相关的配置信息，包含多个具体的配置子项 */
  parser_config?: SvcModelParserConfig;
  /** 解析方法 */
  parser_id?: string;
  /** 用于记录处理开始的时间 */
  process_begin_at?: object;
  /** 记录处理所持续的时长 */
  process_duation?: number;
  /** 表示处理的进度情况 */
  progress?: number;
  /** 处理过程中的提示消息 */
  progress_msg?: string;
  /** 解析状态：0.未解析；3.成功；4.失败； */
  run?: string;
  /** 文档大小 */
  size?: number;
  /** 实体的来源类型，如"local"表示来源于本地 */
  source_type?: string;
  /** 当前的状态标识 */
  status?: string;
  /** 可能用于存放缩略图相关信息 */
  thumbnail?: object;
  /** 令牌数量 */
  token_num?: number;
  /** 文档类型 */
  type?: string;
  /** 更新的日期时间 */
  update_date?: string;
  /** 更新的日期时间 */
  update_time?: number;
}

export interface SvcModelDocumentTypeResponse {
  /** 文档类型 */
  doc_type?: string;
  /** id */
  id?: string;
}

export interface SvcModelExecBusinessComponentsReq {
  /** 组件标识 */
  components_identity?: string;
}

export interface SvcModelFactoriesRes {
  /** 配置时字段的描述，前端根据这个描述配置时展现 */
  config_desc?: Record<string, any>[];
  /** 创建时间 */
  create_date?: string;
  /** 创建时间的时间戳 */
  create_time?: number;
  /** 帮助文档URL链接 */
  help_url?: string;
  /** logo */
  logo?: string;
  /** 模型类型选项 */
  model_types?: string[];
  /** 多次添加模型标识，0:否，1是 */
  multi_add?: number;
  /** 大模型名称 */
  name?: string;
  /** 状态，1:可用，0:不可用，目前只会返回1 */
  status?: string;
  /** 大模型能力标签 */
  tags?: string;
  /** 更新时间 */
  update_date?: string;
  /** 更新时间戳 */
  update_time?: number;
}

export interface SvcModelFeedbackPageReq {
  /** 结束日期，格式：yyyy-MM-dd */
  end_time?: string;
  /** 搜索字段 */
  keywords?: string;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
  /** 开始日期，格式：yyyy-MM-dd */
  start_time?: string;
}

export interface SvcModelFeedbackPageRes {
  page_number?: number;
  page_size?: number;
  /** 反馈记录对象列表 */
  records?: SvcModelFeedbackResponse[];
  total?: number;
}

export interface SvcModelFeedbackResponse {
  /** agent标识#对应：bot_marking、workflow_marking */
  agent_marking?: string;
  /** Agent名称 */
  agent_name?: string;
  /** 反馈聊天记录 */
  chat_content?: string;
  /** 反馈内容 */
  content?: string;
  /** 创建时间 */
  created_at?: string;
  /** 知识库id */
  id?: number;
  /** 聊天ID */
  log_id?: number;
  /** 用户id */
  user_id?: string;
  /** 用户名称 */
  username?: string;
}

export interface SvcModelFileDocumentResponse {
  chunk_count?: number;
  create_date?: string;
  doc_enable?: string;
  /** Document表字段（通过file2document关联） */
  doc_id?: string;
  /** File表字段 */
  file_id?: string;
  kb_id?: string;
  /** 文件或目录名称 */
  name?: string;
  page_count?: number;
  /** 父文档，该文档是附件才有 */
  parent_doc_id?: string;
  parent_doc_name?: string;
  /** 父级目录 */
  parent_file_id?: string;
  parser_config?: string;
  parser_method?: string;
  progress?: number;
  progress_status?: string;
  tag_count?: number;
  token_count?: number;
  /** 文件类型（folder:文件夹|pdf|docx|md等） */
  type?: string;
}

export interface SvcModelFlowInputSchemaCommon {
  /** 允许文件扩展名 */
  allowed_file_extensions?: string[];
  /** 允许文件类型 */
  allowed_file_type?: string[];
  /** 文件上传方式,URL:URL, LOCAL:本地上传，ALL:两者均可 */
  allowed_file_upload_method?: string;
  /** 数组类型值 */
  array_value_type?: string;
  /** 下层结构（递归定义） */
  child_param?: SvcModelFlowInputSchemaCommon[];
  /** 时间格式，默认："2025-06-11T10:22:34Z"，根据业务定义设值 */
  date_format?: string;
  /** 默认值 */
  default_value?: object;
  /** 字段描述 */
  desc?: string;
  /** 是否引用类型 */
  is_ref?: boolean;
  /** 是否下拉选项 */
  is_selector?: boolean;
  /** 最大长度 */
  max_length?: number;
  /** 字段名称 */
  name?: string;
  /** 是否必填 */
  not_null?: boolean;
  /** 数值限制开始值 */
  number_range_begin?: number;
  /** 数值限制结束值 */
  number_range_end?: number;
  /** 引用节点ID */
  ref_cell_id?: string;
  /** 引用节点变量名 */
  ref_name?: string;
  /** 下拉选择的数据，当type=selector时 */
  selector?: SvcModelSelector[];
  /** 选项类型，Radio:单选，Checkbox:多选，Droplist:下拉框单选 */
  selector_type?: string;
  /** 字段类型 支持object, array, integer, number, string, boolean, file 注意：selector即下拉选择字段时，这里为string, 往selector数组补充数据 */
  type?: string;
  /** 设置的值，手动输入的值 */
  value?: object;
}

export interface SvcModelFlowMarkingCommonReqModel {
  /** 工作流标识，唯一,新增时不传 */
  workflow_marking: string;
}

export interface SvcModelFormCancelModel {
  /** 唯一标识 */
  uuid?: string;
}

export interface SvcModelFormSubmitModel {
  /** 唯一标识 */
  uuid?: string;
  /** 表单数据，{属性名：属性值,属性名2:属性值2} */
  variable_data?: Record<string, any>;
}

export interface SvcModelGetDebugInfoByLogIdReq {
  /** 助手唯一标识 */
  bot_marking?: string;
  /** 助手类型，Agent:助手，Agentflow:流助手，Workflow:工作流，其他情况查全部 */
  bot_type?: string;
  /** 聊天记录ID */
  chat_log_id: number;
  /** 是否上线的会话，是:YES, 否:NO */
  online_flag?: string;
}

export interface SvcModelGranularityMessageCountResModel {
  /** 消息轮数 */
  message_count?: number;
  /** 时间节点 */
  time_node?: string;
}

export interface SvcModelGranularityTimeConsumeResModel {
  /** 首token消耗时间(毫秒) */
  first_token_time_consume?: number;
  /** 模型消耗时间(毫秒) */
  llm_time_consume?: number;
  /** 时间节点 */
  time_node?: string;
}

export interface SvcModelGranularityTokenResModel {
  /** 输入消耗token(K) */
  input_token?: number;
  /** 输出消耗token(K) */
  output_token?: number;
  /** 时间节点 */
  time_node?: string;
}

export interface SvcModelGranularityUserCountResModel {
  /** 时间节点 */
  time_node?: string;
  /** 用户数量 */
  user_count?: number;
}

export interface SvcModelGraphrag {
  /** 实体类型 */
  entity_types?: string[];
  /** 方法 */
  method?: string;
  /** 是否使用提取知识图谱 */
  use_graphrag?: boolean;
}

export interface SvcModelIdReq {
  /** 数据集文档id */
  id?: string;
}

export interface SvcModelInputParam {
  /** 数组类型值 */
  array_value_type?: string;
  /** 下层结构（递归定义） */
  child_param?: SvcModelInputParam[];
  /** 默认值 */
  default_value?: object;
  /** 字段描述 */
  desc?: string;
  /** 字段名称 */
  name?: string;
  /** 是否必填 */
  not_null?: boolean;
  /** 下拉选择的数据，当type=selector时 */
  selector?: SvcModelSelector[];
  /** 字段类型 支持object, array, integer, number, string, boolean, 注意：selector即下拉选择字段时，这里为string, 往selector数组补充数据 */
  type?: string;
}

export interface SvcModelInstanceParam {
  /** 鉴权需要的配置 */
  instance_config?: SvcModelInputParam[];
  /** 实例下拉框自身展现名称 */
  instance_show_name?: string;
}

export interface SvcModelKbCommonReq {
  /** 知识库id */
  kb_id: string;
}

export interface SvcModelKbCreateReq {
  /** 描述 */
  description?: string;
  /** 知识库名称 */
  name: string;
  /** 标签库管理ID，tag_library.id */
  tag_library_id?: number;
}

export interface SvcModelKbCreateResponse {
  /** 知识库id */
  id?: string;
}

export interface SvcModelKbIdReq {
  /** id */
  id: string;
}

export interface SvcModelKbIdsReq {
  /** ids */
  ids: string[];
}

export interface SvcModelKbInfoListResponse {
  page_number?: number;
  page_size?: number;
  /** 知识库对象列表 */
  records?: SvcModelKbInfoResponse[];
  total?: number;
}

export interface SvcModelKbInfoReq {
  /** 搜索字段 */
  keywords?: string;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
}

export interface SvcModelKbInfoResponse {
  /** 知识库图片 */
  avatar?: string;
  /** 块数量 */
  chunk_num?: number;
  /** 创建时间 */
  create_date?: string;
  /** 创建时间 */
  create_time?: number;
  /** 创建人 */
  created_by?: string;
  /** 描述 */
  description?: string;
  /** 数据集文档数量 */
  doc_num?: number;
  /** 嵌入模型名称 */
  embd_id?: string;
  /** 知识库id */
  id?: string;
  /** 语言 */
  language?: string;
  /** 知识库名称 */
  name?: string;
  /** 页面排名 */
  pagerank?: number;
  /** 解析器对象 */
  parser_config?: SvcModelParserConfig;
  /** 解析方法 */
  parser_id?: string;
  /** 知识库权限：me,team */
  permission?: string;
  /** 相似度阈值 */
  similarity_threshold?: number;
  /** 状态 */
  status?: string;
  /** 租户id */
  tenant_id?: string;
  /** 令牌数量 */
  token_num?: number;
  /** 更新时间 */
  update_date?: string;
  /** 更新时间 */
  update_time?: number;
  /** 向量相似度权重 */
  vector_similarity_weight?: number;
}

export interface SvcModelKbParserIdResponse {
  /** 解析方法传参（后面的传参，使用该字段） */
  parser_id?: string;
  /** 解析方法名称 */
  parser_id_name?: string;
}

export interface SvcModelKbUpdateReq {
  /** 知识库图片 */
  avatar?: string;
  /** 知识库描述 */
  description?: string;
  /** 知识库嵌入模型 */
  embd_id: string;
  /** 知识库id */
  id: string;
  /** 知识库语言 */
  language?: string;
  /** 知识库名称 */
  name: string;
  /** 知识库页面排名 */
  pagerank?: number;
  /** 解析器对象 */
  parser_config?: SvcModelParserConfig;
  /** 解析方法 */
  parser_id: string;
  /** 知识库权限：me,team */
  permission: string;
}

export interface SvcModelKnowledgeConfigDetailModel {
  /** 知识库图片 */
  avatar?: string;
  /** KbConfig     BotKbUpdateReq `json:"kb_config" form:"kb_config"`                              //知识库配置 */
  conf?: SvcModelPivotKnowledgeBaseRetrievalConfig;
  /** 描述 */
  description?: string;
  /** bot绑定知识库的主键id（关系表id） */
  id?: string;
  /** 知识库ID */
  kb_id?: string;
  /** 知识库名称 */
  name?: string;
}

export interface SvcModelKnowledgeConfigReqBaseModel {
  /** 是否引用归属：true/false */
  is_refer?: boolean;
  /** 知识库配置 */
  knowledge_config_list?: SvcModelKnowledgeConfigReqModel[];
  /** 强制走知识库，默认“非” */
  must_use_first?: boolean;
}

export interface SvcModelKnowledgeConfigReqModel {
  /** KbConfig     BotKbUpdateReq `json:"kb_config" form:"kb_config"`                              //知识库配置 */
  conf?: SvcModelPivotKnowledgeBaseRetrievalConfig;
  /** 知识库ID */
  kb_id?: string;
}

export interface SvcModelLinkCallDetailList {
  page_number?: number;
  page_size?: number;
  /** 列表明细 */
  records?: SvcModelLinkCallSchemaDetail[];
  total?: number;
}

export interface SvcModelLinkCallSchemaDetail {
  /** 分类ID */
  category?: string;
  /** 创建时间 */
  created_at?: string;
  /** 创建人 */
  created_by?: string;
  /** 描述 */
  description?: string;
  /** 名称 */
  display_name?: string;
  /** icon链接 */
  icon?: string;
  /** 工作流调用时参数定义 */
  input_param_schema?: SvcModelFlowInputSchemaCommon[];
  /** 工作流调用后出参定义 */
  output_param_schema?: SvcModelFlowInputSchemaCommon[];
  /** 更新时间 */
  updated_at?: string;
  /** 更新人 */
  updated_by?: string;
  /** 工作流标识，唯一 */
  workflow_marking?: string;
}

export interface SvcModelListAnswerSourceReqModel {
  /** 助手类型，Agent:助手，Agentflow:流助手，Workflow:工作流，其他情况查全部 */
  bot_type?: string;
  /** LogId，历史聊天窗消息接口中返回的 log_id */
  log_id: number;
}

export interface SvcModelListSessionByBotReq {
  /** 助手唯一标识 */
  bot_marking?: string;
  /** 助手类型，Agent:助手，Workflow:工作流，AgentWorkflow:Agent工作流，其他情况查全部 */
  bot_type?: string;
  /** 是否上线的会话，是:YES, 否:NO */
  online_flag?: string;
}

export interface SvcModelLlmAddReq {
  /** 大模型验证配置，Factory中的ConfigDesc所收集到的json,如：{"llm_factory_name":"ZHIPU-AI","config_value":{"api_key":"123"}} || {"llm_factory_name":"Ollama","config_value":{"model_type":"chat","llm_name":"1qqq","api_base":"http://ba.lifehub.top/api/v1/chat","api_key":"123456789","max_tokens":1234}} */
  config_value?: Record<string, any>;
  /** 大模型厂家名称，如OpenAI */
  llm_factory_name?: string;
}

export interface SvcModelLlmBuiltInInfoRes {
  /** 添加时间 */
  created_at?: string;
  /** 模型厂家名称. */
  factory_name?: string;
  /** 内置大模型id */
  id?: number;
  /** 模型配置 */
  llm_config?: SvcModelBotLlmConfigModel;
  /** 模型名称 */
  model_name?: string;
  /** 模型类型 */
  model_type?: string;
  /** 服务名称 */
  server_name?: string;
}

export interface SvcModelLlmBuiltInUpdateReq {
  /** 内置大模型id */
  id: number;
  /** 模型配置 */
  llm_config: SvcModelBotLlmConfigModel;
}

export interface SvcModelLlmCallReturnSimpleLogModel {
  /** 耗时 */
  cost?: number;
  /** 原始输入 */
  input?: object;
  /** 模型工厂 */
  model_factory?: string;
  /** 模型名称 */
  model_name?: string;
  /** 输出 */
  output?: object;
  /** tokens消耗 */
  use_tokens?: SvcModelUseTokensModel;
}

export interface SvcModelLlmDeleteReq {
  /** 大模型厂家名称 */
  llm_factory?: string;
  /** 大模型名称 */
  llm_name?: string;
}

export interface SvcModelLlmEmbeddingRequest {
  /** 模型厂家 */
  factory?: string;
  /** 需要向量化的文本 */
  input_texts?: string[];
  /** 模型名称 */
  model_name?: string;
}

export interface SvcModelLlmFactoriesRes {
  /** 大模型厂家名称 */
  llm_factory?: string;
  /** 大模型具体列表 */
  llm_status_list?: SvcModelLlmStatusRes[];
}

export interface SvcModelLlmFactoryDeleteReq {
  /** 大模型厂家名称 */
  llm_factory?: string;
}

export interface SvcModelLlmItem {
  /** 模型数据库的ID */
  model_id?: number;
  /** 具体模型名称 */
  name?: string;
  /** 大模型类型 */
  type?: string;
  /** 模型已使用tokens */
  used_token?: number;
}

export interface SvcModelLlmRerankRequest {
  /** 模型厂家 */
  factory?: string;
  /** 输入内容 */
  input?: {
    /** 待排序的候选文档列表。每个元素是一个字符串。最多包含500个文档，每个文档长度不超过4,000个Token */
    documents?: string[];
    /** 查询文本。最大长度不能超过4,000个Token */
    query?: string;
  };
  /** 模型名称 */
  model_name?: string;
  /** 可选参数 */
  parameters?: {
    instruct?: string;
    return_documents?: boolean;
    top_n?: number;
  };
}

export interface SvcModelLlmResult {
  /** 配置时字段的描述，前端根据这个描述配置时展现 */
  config_desc?: Record<string, any>[];
  /** 帮助文档URL链接 */
  help_url?: string;
  /** 具体LLM */
  llm?: SvcModelLlmItem[];
  /** 大模型厂家名称 */
  llm_factory_name?: string;
  /** 模型类型选项(仅用于添加) */
  model_types?: string[];
  /** 多次添加模型标识，0:否，1是 */
  multi_add?: number;
  /** 大模型能力标签 */
  tags?: string;
}

export interface SvcModelLlmStatusRes {
  /** 是否可用 */
  available?: boolean;
  /** 创建时间 */
  create_date?: string;
  /** 创建时间戳 */
  create_time?: number;
  /** 大模型厂家名称 */
  fid?: string;
  /** 大模型名称 */
  llm_name?: string;
  /** 最大Tokens */
  max_tokens?: number;
  /** 模型类型 */
  model_type?: string;
  /** 状态，1:正常，2:异常 */
  status?: string;
  /** 标签 */
  tags?: string;
  /** 更新时间 */
  update_date?: string;
  /** 更新时间戳 */
  update_time?: number;
}

export interface SvcModelMcpAddReq {
  /** 认证数据结构 */
  auth_json: SvcModelMcpAuthJson;
  /** MCP logo */
  avatar?: string;
  /** MCP服务名，例如：PivotMcpServer */
  client_name: string;
  /** 服务版本号 */
  client_version: string;
  /** MCP服务描述 */
  description?: string;
  /** 工具名字，可重复 */
  display_name: string;
  /** 头部key字义 */
  header?: string;
  /** MCP服务url */
  mcp_server_url: string;
  /** mcp类型：1.服务中心；2.自定义 */
  mcp_type: number;
  /** 协议模式，SSE or StreamableHTTP */
  protocol_type?: string;
  /** 协议版本号 */
  protocol_version: string;
  /** 租户id数组 */
  tenant_ids?: string[];
  /** 头部key对应的值 */
  value?: string;
}

export interface SvcModelMcpAuthJson {
  /** 认证信息，Node时为空，Basic时存储为key为：Authorization，value为：username:password, Bearer时存储为key为：Authorization:Bearer ****， Customer时存储为Key:value */
  headers?: Record<string, string>;
  /** 认证类型，None:无认证方式，Basic:账号密码认证，Bearer:Bearer Token认证，Customer:自定义Header */
  type: string;
}

export interface SvcModelMcpIdReq {
  /** 主键ID */
  id: number;
}

export interface SvcModelMcpInfoRes {
  /** 调用智能体数量 */
  agent_number?: number;
  /** MCP logo */
  avatar?: string;
  /** 创建时间 */
  created_at?: string;
  /** 描述 */
  description?: string;
  /** MCP 工具名字 */
  display_name?: string;
  /** 调用失败次数 */
  fail_call_number?: number;
  /** id */
  id?: number;
  /** mcp基础配置信息 */
  mcp_server_config?: SvcModelMcpServerModel;
  /** mcp类型：1.服务中心；2.自定义 */
  mcp_type?: number;
  /** 响应平均时长（单位：毫秒ms） */
  response_avg_duration?: number;
  /** 工具清单 */
  tool_list?: SvcModelMcpInfoToolRes[];
  /** 累计调用次数 */
  total_call_number?: number;
  /** 累计调用free次数 */
  total_free_call_number?: number;
  /** 更新时间 */
  updated_at?: string;
}

export interface SvcModelMcpInfoToolRes {
  /** 描述 */
  description?: string;
  /** 输入 */
  input_param_schema?: SvcModelInputParam[];
  /** 输出 */
  output_param_schema?: SvcModelInputParam[];
  /** 工具名称 */
  tool_name?: string;
}

export interface SvcModelMcpListToolModel {
  /** MCP 服务名称 */
  client_name?: string;
}

export interface SvcModelMcpPageReq {
  /** 搜索字段 */
  keywords?: string;
  /** mcp类型：1.服务中心；2.自定义 */
  mcp_type: number;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
  /** 租户id */
  tenant_id?: string;
}

export interface SvcModelMcpPageRes {
  page_number?: number;
  page_size?: number;
  /** 反馈记录对象列表 */
  records?: SvcModelMcpResponse[];
  total?: number;
}

export interface SvcModelMcpResponse {
  /** MCP logo */
  avatar?: string;
  /** 创建时间 */
  created_at?: string;
  /** 描述 */
  description?: string;
  /** MCP 工具名字 */
  display_name?: string;
  /** id */
  id?: number;
  /** 空间名称 */
  tenant_name?: string;
  /** 工具数量 */
  tool_count?: number;
  /** 更新时间 */
  updated_at?: string;
}

export interface SvcModelMcpServerModel {
  /** 认证数据结构 */
  auth_json: SvcModelMcpAuthJson;
  /** like pivotServer */
  client_name?: string;
  /** like 1.0.0 */
  client_version?: string;
  /** 呈现名称，随便 */
  display_name?: string;
  /** like http://127.0.0.1:8020/sse */
  mcp_server_url?: string;
  /** 协议模式，SSE or StreamableHTTP */
  protocol_type?: string;
  /** like "2024-11-05" */
  protocol_version?: string;
}

export interface SvcModelMcpUpdateReq {
  /** 认证数据结构 */
  auth_json: SvcModelMcpAuthJson;
  /** MCP logo */
  avatar?: string;
  /** MCP服务名，例如：PivotMcpServer */
  client_name: string;
  /**
   * Header          string      `json:"header" form:"header"`                                        // 头部key字义
   * Value           string      `json:"value" form:"value"`                                          // 头部key对应的值
   */
  client_version: string;
  /** MCP服务描述 */
  description?: string;
  /** 工具名字，可重复 */
  display_name: string;
  /** id */
  id: number;
  /** MCP服务url */
  mcp_server_url: string;
  /** 协议模式，SSE or StreamableHTTP */
  protocol_type?: string;
  /** 协议版本号 */
  protocol_version: string;
  /** 租户id数组 */
  tenant_ids?: string[];
}

export interface SvcModelModifyPluginInstanceParam {
  /** 祖居组件实例ID */
  instance_id?: number;
  /** 工具组件实例名称 */
  name?: string;
  /** 实例子配置JSON对象 */
  plugin_instance_config?: object;
}

export interface SvcModelNextLinks {
  link_type?: string;
  link_url?: string;
  topic?: string;
}

export interface SvcModelPageHistoryMsgReqModel {
  /** 结束时间 */
  end_time?: string;
  /** 历史ID */
  history_id?: string;
  /** 日志状态，Success:成功，Failure:失败，All:全部 */
  is_error?: string;
  /** 页码 */
  page_number?: number;
  /** 每页条数 */
  page_size?: number;
  /** 开始时间 */
  start_time?: string;
}

export interface SvcModelPageSessionHistoryMsgReqModel {
  /** 页码 */
  page_number?: number;
  /** 每页条数 */
  page_size?: number;
  /** 会话ID */
  session_id?: number;
}

export interface SvcModelPageWorkflowHistoryReq {
  /** 结束时间 */
  end_time?: string;
  /** 日志状态，Success:成功，Failure:失败，All:全部 */
  is_error?: string;
  /** 是否上线的会话，是:YES, 否:NO */
  online_flag?: string;
  /** 页码 */
  page_number: number;
  /** 每页条数 */
  page_size: number;
  /** 开始时间 */
  start_time?: string;
  /** workflow标识 */
  workflow_marking?: string;
}

export interface SvcModelPageWorkflowHistoryResp {
  page_number?: number;
  page_size?: number;
  /** 历史消息记录 */
  records?: SvcModelWorkflowHistorySimpleModel[];
  total?: number;
}

export interface SvcModelPageWorkflowListReq {
  /** 分类ID */
  category?: string;
  /** 工作流名称,模糊查询 */
  display_name?: string;
  /** 页码 */
  page_number: number;
  /** 每页条数 */
  page_size: number;
  /** 工作流类型,AgentWorkflow:Agent工作流, Workflow:工作流, Agent:Agent; DEFAULT:Workflow */
  workflow_type?: string;
}

export interface SvcModelPageWorkflowStoreDetailList {
  page_number?: number;
  page_size?: number;
  /** 列表明细 */
  records?: SvcModelWorkflowStoreDetail[];
  total?: number;
}

export interface SvcModelParserConfig {
  /** 自动关键词 */
  auto_keywords?: number;
  /** 自动问题 */
  auto_questions?: number;
  /** 块Token数 */
  chunk_token_num?: number;
  /** 分段标识符 */
  delimiter?: string;
  /** 提取知识图谱 */
  graphrag?: SvcModelGraphrag;
  /** 表格转HTML */
  html4excel?: boolean;
  /** 布局识别和OCR */
  layout_recognize?: string;
  /** pages */
  pages?: number[][];
  /** RAPTOR策略 */
  raptor?: SvcModelRaptor;
}

export interface SvcModelPivotAgentRequest {
  /** bot标识 */
  bot_marking?: string;
  /** 问题涉及的文件URL列表，字符串数组 */
  files?: string[];
  /** historyId 寻上下文绑定使用 */
  history_id?: string;
  /** 用户bot中提问 */
  question: string;
}

export interface SvcModelPivotChunkMetadataResponse {
  /** 文本块ID */
  chunk_id?: string;
  /** 文档ID */
  doc_id?: string;
  /** 文档名称 */
  doc_name?: string;
  /** 文档类型 Original/Summary */
  doc_type?: string;
  /** 一级目录 */
  first_file_name?: string;
  /** 二级目录 */
  second_file_name?: string;
  /** 文档关键词 */
  segment_kwd?: string[];
  /** 问题 */
  segment_qa?: string[];
  /** 相似度 */
  similarity?: number;
  /** 标签 */
  tag_kwd?: string[];
}

export interface SvcModelPivotChunkResponse {
  /** 文本块的内容 */
  content?: string;
  /** 元数据数组 */
  metadata?: SvcModelPivotChunkMetadataResponse[];
  /** 元数据数组长度 */
  metadata_total?: number;
}

export interface SvcModelPivotDirResponse {
  /** 创建时间 */
  create_date?: string;
  /** 文件数量 */
  file_count?: number;
  /** 目录ID */
  file_id?: string;
  /** 分组类型 */
  group_type?: string;
  /** 知识库ID */
  kb_id?: string;
  /** 目录名称 */
  name?: string;
  /** 父目录ID（一级目录为null） */
  parent_id?: string;
}

export interface SvcModelPivotKbChunkInfoResponse {
  /** 该对象的唯一标识符 */
  chunk_id?: string;
  /** 内容 */
  content_with_weight?: string;
  /** 文档 ID */
  doc_id?: string;
  /** 文档名称 */
  doc_name?: string;
  /** 文件ID */
  file_id?: string;
  /** 自定义文本块下标id，例如：0-0、1-0、2-0、2-1、2-2 */
  index_id?: string;
  /** 知识库 ID */
  kb_id?: string;
  /** 知识库名称 */
  kb_name?: string;
  /** 相似度 */
  similarity?: number;
  /** 摘要 ID */
  sum_id?: string;
}

export interface SvcModelPivotKnowledgeBaseRetrievalConfig {
  /** 摘要目录中的文档ID列表（doc_id） */
  abstract_doc_ids?: string[];
  /** 压缩模型 */
  compression_model?: string;
  /** 压缩提示词 */
  compression_prompt?: string;
  /** 是否启用摘要检索 */
  enable_abstract?: boolean;
  /** 是否启用归纳压缩 */
  enable_compression?: boolean;
  /** 是否启用图谱扩展 */
  enable_graph_expansion?: boolean;
  /** 是否启用原文检索 */
  enable_original_text?: boolean;
  /** 是否全文召回 */
  full_text_recall?: boolean;
  /** 全文检索权重，范围0-100（混合检索） */
  full_text_weight?: number;
  /** 检索深度，范围1-2（0表示使用默认值2） */
  graph_depth?: number;
  /** 图谱扩展深度，范围1-2 */
  graph_expansion_depth?: number;
  /** 图谱检索权重，范围0-100（混合检索） */
  graph_weight?: number;
  /** 原文目录中的文档ID列表（doc_id） */
  original_text_doc_ids?: string[];
  /** 优先策略(Original: 原文:、Abstract: 摘要) */
  priority_strategy?: string;
  /** Rerank模型 */
  rerank_id?: string;
  /** 检索类型(全文:Fulltext、向量:Vector、图谱:Graph、混合:Hybrid) */
  retrieval_type?: string;
  /** 选择摘要类型：1.全部；2.指定原文&原文文件夹； */
  select_abstract_type?: number;
  /** 选择原文类型：1.全部；2.指定原文&原文文件夹； */
  select_original_text_type?: number;
  /** 相似度设置 */
  similarity_threshold?: number;
  /** 召回分段数 */
  top_k?: number;
  /** 向量检索权重，范围0-100（混合检索） */
  vector_weight?: number;
}

export interface SvcModelPluginInstanceParam {
  /** 工具组件实例名称 */
  name?: string;
  /** 插件ID */
  plugin_id?: number;
  /** 实例子配置JSON对象,具体取决于instance schema */
  plugin_instance_config?: Record<string, any>;
  /** 插件名称：ExeSQL */
  plugin_name?: string;
}

export interface SvcModelPluginInstanceResponse {
  /** 组件实例配置ID */
  instance_id?: number;
  /** 工具组件实例名称 */
  name?: string;
}

export interface SvcModelPluginReq {
  /** 插件名称，示例：ExeSQL */
  plugin_name?: string;
}

export interface SvcModelRaptor {
  /** 最大聚类数 */
  max_cluster?: number;
  /** 最大token数 */
  max_token?: number;
  /** 提示词 */
  prompt?: string;
  /** 随机种子 */
  random_seed?: number;
  /** 阈值 */
  threshold?: number;
  /** 是否使用召回增强RAPTOR策略 */
  use_raptor?: boolean;
}

export interface SvcModelResourceDocTypeReq {
  /** 文档管理类型：1.知识库；2.对话文档； */
  doc_type: number;
}

export interface SvcModelResourceSpaceAddReq {
  /** 管理员用户id */
  admin_user_id: string;
  /** 空间logo */
  logo: string;
  /** 组织 */
  organization?: string;
  /** 空间描述 */
  tenant_description?: string;
  /** 空间名称 */
  tenant_name: string;
}

export interface SvcModelResourceSpaceKwReq {
  /** 搜索字段 */
  keywords?: string;
}

export interface SvcModelResourceSpacePageReq {
  /** 搜索字段 */
  keywords?: string;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
}

export interface SvcModelResourceSpacePageRes {
  page_number?: number;
  page_size?: number;
  /** 对象列表 */
  records?: SvcModelResourceSpaceResponse[];
  total?: number;
}

export interface SvcModelResourceSpaceResponse {
  /** 管理员 */
  admin_name?: string;
  /** 创建时间 */
  create_time?: string;
  /** 组织 */
  organization?: string;
  /** 空间id */
  tenant_id?: string;
  /** 空间名称 */
  tenant_name?: string;
}

export interface SvcModelResourceSpaceTenantIdReq {
  /** 空间id */
  tenant_id: string;
}

export interface SvcModelResourceSpaceTenantInfoRes {
  /** 管理员 */
  admin_name?: string;
  /** 创建时间 */
  create_time?: string;
  /** 描述 */
  description?: string;
  /** 空间logo */
  logo?: string;
  /** 组织 */
  organization?: string;
  /** 空间id */
  tenant_id?: string;
  /** 空间名称 */
  tenant_name?: string;
}

export interface SvcModelResourceSpaceUpdateReq {
  /** 空间logo */
  logo: string;
  /** 空间描述 */
  tenant_description?: string;
  /** 空间id */
  tenant_id?: string;
  /** 空间名称 */
  tenant_name: string;
}

export interface SvcModelResourceSpaceUserRes {
  /** 头像 */
  avatar?: string;
  /** 邮箱 */
  email?: string;
  /** 加入时间 */
  join_date?: string;
  /** 昵称 */
  nickname?: string;
  /** 组织 */
  organization?: string;
  /** 角色(用户类型：owner：管理员；normal：成员；) */
  role?: string;
  /** 用户ID */
  user_id?: string;
}

export interface SvcModelRetrieveConfResponse {
  /** 全文检索分数 (0-10) */
  full_score?: number;
  /** 全文检索开启状态：0.否；1.是 */
  full_status?: number;
  /** 全文检索Top N (0-10) */
  full_top_n?: number;
  /** 混合检索关键词占比 (0-100) */
  mixed_keyword?: number;
  /** 混合检索分数 (0-10) */
  mixed_score?: number;
  /** 混合检索语义占比 (0-100) */
  mixed_semantics?: number;
  /** 混合检索开启状态：0.否；1.是 */
  mixed_status?: number;
  /** 混合检索Top N (0-10) */
  mixed_top_n?: number;
  /** 向量检索分数 (0-10) */
  vector_score?: number;
  /** 向量检索开启状态：0.否；1.是 */
  vector_status?: number;
  /** 向量检索Top N (0-10) */
  vector_top_n?: number;
}

export interface SvcModelSelector {
  /** 选项名称 */
  label?: string;
  /** 选项值 */
  value?: string;
}

export interface SvcModelSessionHistoryMsgBaseModel {
  /** 工具/节点执行过程明细数据 */
  bot_plugin_exec_message?: SvcModelBotPluginExecMessageModel[];
  /** 点踩时补充的评论 */
  comment?: string;
  /** 大模型输出消耗tokens */
  completion_tokens?: number;
  /** 对话ID */
  conversation_id?: string;
  /** 耗时 */
  cost?: number;
  /** 对话时间 */
  created_at?: string;
  /** 反馈内容 */
  feedback_content?: string;
  /** 附件 */
  files?: string[];
  /** 错误标志性，0:成功，1:失败 */
  is_error?: number;
  /** 1点赞 0取消 -1点踩 */
  like_type?: number;
  /** 日志ID */
  log_id?: number;
  /** 未结束，0:结束，1:未结束 */
  not_finished?: number;
  /** 用户输入消耗tokens */
  prompt_tokens?: number;
  /** 大模型Reasoning tokens消耗 */
  reasoning_tokens?: number;
  /** AI/系统输出 */
  sys_output?: string;
  /** 大模型总消耗tokens */
  total_tokens?: number;
  /** 用户输入 */
  user_input?: string;
  /** 是否视觉消息 0:否，1:是 */
  vision_msg?: number;
}

export interface SvcModelSessionHistoryMsgResModel {
  page_number?: number;
  page_size?: number;
  /** 历史消息记录 */
  records?: SvcModelSessionHistoryMsgBaseModel[];
  total?: number;
}

export interface SvcModelSourceTypeResModel {
  /** 场景类型名称 */
  source_name?: string;
  /** 场景类型 */
  source_type?: string;
}

export interface SvcModelStatisticAgentCommonModel {
  /** 智能体标识数组 */
  agent_marking?: string[];
  /** 时间颗粒度：时hour，天day， 月month */
  granularity?: string;
  /** 场景类型 */
  source_type?: string;
  /** 时间范围 */
  time_range?: string[];
}

export interface SvcModelStatisticAgentResModel {
  /** 智能体统计列表 */
  analysis_info_res?: SvcModelAgentAnalysisInfoResModel[];
  /** 消息轮数统计 */
  message_count_res?: SvcModelGranularityMessageCountResModel[];
  /** 耗时统计 */
  time_consume_res?: SvcModelGranularityTimeConsumeResModel[];
  /** token消耗统计 */
  token_res?: SvcModelStatisticAgentTokenResModel;
  /** 用户数统计 */
  user_count_res?: SvcModelGranularityUserCountResModel[];
}

export interface SvcModelStatisticAgentTokenResModel {
  /** 时间颗粒度消耗token */
  granularity_token?: SvcModelGranularityTokenResModel[];
  /** 输入消耗总token(K) */
  total_input_token?: number;
  /** 输出消耗总token(K) */
  total_output_token?: number;
  /** 总消耗token(K) */
  total_token?: number;
}

export interface SvcModelStatisticNameSpaceAgentResModel {
  /** 助手数量 */
  agent_count?: number;
  /** 已建知识库数量 */
  knowledge_count?: number;
  /** 模型使用数量 */
  llm_use_count?: number;
  /** 成员数量 */
  user_count?: number;
  /** 工作流数量 */
  workflow_count?: number;
}

export interface SvcModelTagLibraryIDReq {
  /** 标签库管理ID，tag_library.id */
  tag_library_id: number;
}

export interface SvcModelTagLibraryIdReq {
  /** 主键ID */
  id: number;
}

export interface SvcModelTagLibraryInfoImportReq {
  /** 上传的文件流二进制数组 */
  file: string;
  /** 标签库管理ID，tag_library.id */
  tag_library_id: number;
}

export interface SvcModelTagLibraryInfoPageReq {
  /** 搜索字段 */
  keywords?: string;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
  /** 标签库管理ID，tag_library.id */
  tag_library_id: number;
}

export interface SvcModelTagLibraryInfoPageRes {
  page_number?: number;
  page_size?: number;
  /** 反馈记录对象列表 */
  records?: SvcModelTagLibraryInfoResponse[];
  total?: number;
}

export interface SvcModelTagLibraryInfoRes {
  /** 创建时间 */
  created_at?: string;
  /** 标签描述 */
  description?: string;
  /** 知识库id */
  id?: number;
  /** 标签名称 */
  name?: string;
  /** 更新时间 */
  updated_at?: string;
}

export interface SvcModelTagLibraryInfoResponse {
  /** 标签唯一标识 */
  code?: string;
  /** 创建时间 */
  created_at?: string;
  /** 标签描述 */
  description?: string;
  /** 枚举值：["正常","异常","维修中"] */
  enum_value?: string;
  /** 知识库id */
  id?: number;
  /** 标签名称 */
  name?: string;
  /** 适用范围：传感器、电机、电梯、通用 */
  range?: string;
  /** 来源类型：人工维护、规则计算、传感器采集、系统对接 */
  source_type?: string;
  /** 标签库管理ID，tag_library.id */
  tag_library_id?: number;
  /** 标签类型：Integer、String、Time、Number、file、radio、checkbox、Array<file>、data */
  type?: string;
  /** 单位 */
  unit?: string;
  /** 更新策略：定时更新、事件驱动、实时流式 */
  update_strategy?: string;
  /** 更新时间 */
  updated_at?: string;
  /** 标签值类型：枚举、布尔、数值、时间戳、字符串 */
  value_type?: string;
}

export interface SvcModelTagLibraryKwReq {
  /** 搜索字段 */
  keywords?: string;
}

export interface SvcModelTagLibraryPageReq {
  /** 搜索字段 */
  keywords?: string;
  /** 页码 */
  page_number: number;
  /** 数量 */
  page_size: number;
}

export interface SvcModelTagLibraryPageRes {
  page_number?: number;
  page_size?: number;
  /** 反馈记录对象列表 */
  records?: SvcModelTagLibraryResponse[];
  total?: number;
}

export interface SvcModelTagLibraryResponse {
  /** 创建时间 */
  created_at?: string;
  /** 标签描述 */
  description?: string;
  /** 标签icon */
  icon?: string;
  /** 知识库id */
  id?: number;
  /** 标签名称 */
  name?: string;
  /** 标签数量 */
  tag_sum?: number;
  /** 更新时间 */
  updated_at?: string;
}

export interface SvcModelTestOnlyWorkflowExecuteReq {
  /** 运行时需要的变量参数值，JSON格式 */
  variables_config?: Record<string, any>;
  /** 工作流标识，唯一,新增时不传 */
  workflow_marking?: string;
}

export interface SvcModelTestOnlyWorkflowExecuteResp {
  /** 结果 true:成功，false失败 */
  execute_result?: boolean;
  /** 最终结果返回参考 */
  flow_response?: object;
  /** 执行过程追踪 */
  trace_data_json?: object;
  /** 追踪日志ID */
  trace_log_id?: number;
}

export interface SvcModelTestSingleCellExecuteReq {
  /** 测试运行的CellID */
  run_cell_id?: string;
  /** 运行时需要的变量参数值，JSON格式 */
  variables_config?: Record<string, any>;
  /** 工作流标识，唯一,新增时不传 */
  workflow_marking?: string;
}

export interface SvcModelTestSingleCellExecuteResp {
  /** 结果 true:成功，false失败 */
  execute_result?: boolean;
  /** 最终结果返回参考 */
  flow_response?: object;
  /** 执行过程追踪 */
  trace_data_json?: object;
  /** 错误跟踪信息 */
  trace_log?: Record<string, any>;
}

export interface SvcModelToolsCommonDesc {
  /** 图标base64 */
  avatar?: string;
  /** 插件分类名称，多级分类下划线表示 */
  category_name?: string;
  /** 是否带有配置项 */
  config_need?: number;
  /** 工具配置项结构描述JSON结构 */
  config_schema?: SvcModelInputParam[];
  /** 插件描述 */
  description?: string;
  /** 插件名字，可重复 */
  display_name?: string;
  /** 插件的ID */
  id?: number;
  /** 输入参数schema定义 */
  input_param_schema?: SvcModelInputParam[];
  /** 是否需要授权,需要时取instance表数据 */
  instance_need?: number;
  /** 授权实例配置结构描述JSON结构 */
  instance_schema?: SvcModelInstanceParam[];
  /** 用于编写提示词时使用，避免提示词出现中出现两个同名插件 */
  name?: string;
  /** 输出参数schema定义 */
  output_param_schema?: SvcModelInputParam[];
  /** 插件超时时间（单位：秒） */
  timeout?: number;
  /** 使用场景：ALL:通用,TOOL:仅助手可用,WORKFLOW:仅工作流使用 */
  use_type?: string;
}

export interface SvcModelTraceLogDetailModel {
  /** 请求完整结束时间 */
  end_time?: string;
  /** 错误相关日志 */
  error_log?: string;
  /** 首词响应耗时 */
  first_token_time_in_ms?: number;
  /** 是否异常 0:否，1:是 */
  is_error?: number;
  /** 请求发起时间 */
  start_time?: string;
  /** 总耗时，毫秒 */
  total_cost?: number;
  /** 总tokens消耗 */
  total_tokens?: number;
  /** 日志详情 */
  trace_log_detail?: SvcModelBotCallToolSimpleLog;
  /** LogId */
  trace_log_id?: number;
  /** 当是Agentflow workflow时，完整的flowjson 定义 */
  workflow_data?: string;
}

export interface SvcModelUpdateBotSessionReqModel {
  /** 会话HistoryId,开启聊天后会返回，必填 */
  history_id: string;
  /** 助手唯一标识,必填 */
  session_id: number;
  /** 会话名称，使用输入的聊天内容前20字符 */
  session_name?: string;
  /** 变量输入,也可在更新会话信息提交 */
  variable_json?: SvcModelVariableDescribeModel[];
}

export interface SvcModelUpdateBusinessComponentsCategoryReq {
  /** 分类描述 */
  description: string;
  /** 主键id */
  id: number;
  /** 分类名称 */
  name: string;
  /** 权限开放模式:空间可见、仅自己可见：tenant、only_me */
  permission_type: string;
}

export interface SvcModelUpdateCondaEnvReq {
  /** conda环境id */
  env_id: string;
  /** 依赖安装 */
  init_command?: string;
  /** 环境命名 */
  space_name: string;
  /** 路径 */
  space_path: string;
}

export interface SvcModelUpdateCondaReq {
  /** 环境ID */
  env_id: string;
  /** 依赖安装 */
  init_command?: string;
}

export interface SvcModelUpdateMcpToolReq {
  /** 输入，（主要更新默认值） */
  input_param_schema?: SvcModelInputParam[];
  /** mcp服务ID */
  mcp_server_id: number;
  /** 输出 */
  output_param_schema?: SvcModelInputParam[];
  /** 工具，Mcp服务下的某个工具的工具名 */
  tool_name: string;
}

export interface SvcModelUseTokensModel {
  /** 大模型输出消耗tokens */
  completion_tokens?: number;
  /** 用户输入消耗tokens */
  prompt_tokens?: number;
  /** 大模型Reasoning tokens消耗 */
  reasoning_tokens?: number;
  /** 大模型总消耗tokens */
  total_tokens?: number;
}

export interface SvcModelVariableDescribeModel {
  /** 字段描述 */
  describe?: string;
  /** 字段名称 */
  name?: string;
  /** 字段值，接收任意类型 */
  value?: object;
}

export interface SvcModelVisionConfigModel {
  /** 是否开启 */
  open_flag?: boolean;
  /** 分辨率，High:高分辨率，Low:低分辨率 */
  resolution_type?: string;
  /** 是否开启（语音转文字） */
  speech_open_flag?: boolean;
  /** 上传数量限制 */
  upload_size?: number;
  /** 上传方式，File:本地上传，URL:链接上传 */
  upload_type?: string;
}

export interface SvcModelWorkflowBaseConfigModel {
  /** 是否开启 */
  open_flag?: boolean;
  workflow_list?: SvcModelWorkflowListConfigModel[];
}

export interface SvcModelWorkflowConfigReqModel {
  /** 变量名称 */
  param_name?: string;
  /** 设置值 */
  value_set?: string;
  /** 变量值使用类型，Default:默认值，Fixed:固定值 */
  value_use_type?: string;
}

export interface SvcModelWorkflowHistorySimpleModel {
  /** 消耗时间，毫秒 */
  cost_time?: number;
  /** 运行结果 */
  end_response?: object;
  /** 执行结束时间 */
  executed_end_time?: string;
  /** 执行开始时间 */
  executed_start_time?: string;
  /** log id */
  id?: number;
  /** 总消耗tokens数量 */
  total_tokens?: number;
}

export interface SvcModelWorkflowListConfigModel {
  /** 配置 */
  config?: SvcModelWorkflowConfigReqModel[];
  /** 工作流标识 */
  workflow_marking?: string;
}

export interface SvcModelWorkflowStoreDetail {
  /** 分类ID */
  category?: string;
  /** 创建时间 */
  created_at?: string;
  /** 创建人 */
  created_by?: string;
  /** 描述 */
  description?: string;
  /** 名称 */
  display_name?: string;
  /** icon链接 */
  icon?: string;
  /** 工作流调用时参数定义 */
  input_param_schema?: SvcModelFlowInputSchemaCommon[];
  /** 工作流调用后出参定义 */
  output_param_schema?: SvcModelFlowInputSchemaCommon[];
  /** 发布状态，DRAFT:草稿,OFFLINE:已下线,ONLINE:已发布,UPDATE:有更新';DEFAULT:DRAFT */
  status?: string;
  /** 更新时间 */
  updated_at?: string;
  /** 更新人 */
  updated_by?: string;
  /** 视觉配置 */
  vision_config?: SvcModelVisionConfigModel;
  /** 工作流中包含前后端的完整数据 */
  workflow_data?: string;
  /** 工作流标识，唯一 */
  workflow_marking?: string;
  /** 工作流类型,AgentWorkflow :Agent工作流,Workflow :工作流';DEFAULT:Workflow */
  workflow_type?: string;
}

export interface SvcModelWorkflowStoreReq {
  /** 分类id */
  category?: string;
  /** 工作流描述 */
  description?: string;
  /** 工作流名称 */
  display_name: string;
  /** 图标 */
  icon?: string;
  /** 工作流中包含前后端的完整数据 */
  workflow_data?: string;
  /** 工作流标识，唯一,新增时不传 */
  workflow_marking?: string;
  /** 工作流类型,AgentWorkflow:Agent工作流, Workflow:工作流'; DEFAULT:Workflow */
  workflow_type?: string;
}

export interface SwagenDefaultRetStruct {
  data?: object;
  msg?: string;
  state?: number;
}

export interface TableCondaConfig {
  created_at?: string;
  created_by?: string;
  env_id?: string;
  id?: number;
  init_command?: string;
  space_name?: string;
  space_path?: string;
  tenant_id?: string;
  updated_at?: string;
  updated_by?: string;
}

export interface TableLlmFactories {
  config_desc?: string;
  create_date?: string;
  create_time?: string;
  help_url?: string;
  logo?: string;
  multi_add?: number;
  name?: string;
  status?: string;
  tags?: string;
  update_date?: string;
  update_time?: string;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<
  AxiosRequestConfig,
  'data' | 'params' | 'url' | 'responseType'
> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<
  AxiosRequestConfig,
  'data' | 'cancelToken'
> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title No title
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  aiBotCommon = {
    /**
     * @description service.AiBotCommonService:BotChatLogLike
     *
     * @tags AiBotCommon
     * @name BotChatLogLike
     * @summary 聊天记录点赞及评论接口
     * @request POST:/ai_bot_common/bot_chat_log_like
     */
    botChatLogLike: (param: SvcModelBotChatLikeReqModel, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/ai_bot_common/bot_chat_log_like`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotCommonService:CategoryList
     *
     * @tags AiBotCommon
     * @name CategoryList
     * @summary 助手分类列表
     * @request GET:/ai_bot_common/category_list
     */
    categoryList: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelCategorySimpleModel[];
        },
        any
      >({
        path: `/ai_bot_common/category_list`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotCommonService:CreateBotSession
     *
     * @tags AiBotCommon
     * @name CreateBotSession
     * @summary 创建会话,会自动创建, 当无变量提交时·可以不用这个接口
     * @request POST:/ai_bot_common/create_bot_session
     */
    createBotSession: (param: SvcModelCreateBotSessionReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotChatSessionHistoryModel[];
        },
        any
      >({
        path: `/ai_bot_common/create_bot_session`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotCommonService:DebugLogInfo
     *
     * @tags AiBotCommon
     * @name DebugLogInfo
     * @summary 调试详细日志相关接口
     * @request POST:/ai_bot_common/debug_log_info
     */
    debugLogInfo: (param: SvcModelGetDebugInfoByLogIdReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelTraceLogDetailModel;
        },
        any
      >({
        path: `/ai_bot_common/debug_log_info`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotCommonService:DeleteBotSession
     *
     * @tags AiBotCommon
     * @name DeleteBotSession
     * @summary 删除会话
     * @request POST:/ai_bot_common/delete_bot_session
     */
    deleteBotSession: (param: SvcModelDeleteBotSessionReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotChatSessionHistoryModel[];
        },
        any
      >({
        path: `/ai_bot_common/delete_bot_session`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotCommonService:ListAnswerSource
     *
     * @tags AiBotCommon
     * @name ListAnswerSource
     * @summary 根据LogId查询历史答案来源列表
     * @request POST:/ai_bot_common/list_answer_source
     */
    listAnswerSource: (param: SvcModelListAnswerSourceReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelPivotKbChunkInfoResponse[];
        },
        any
      >({
        path: `/ai_bot_common/list_answer_source`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotCommonService:ListSessionByBot
     *
     * @tags AiBotCommon
     * @name ListSessionByBot
     * @summary 获取Bot所有历史会话列表
     * @request POST:/ai_bot_common/list_session_by_bot
     */
    listSessionByBot: (param: SvcModelListSessionByBotReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotChatSessionHistoryModel[];
        },
        any
      >({
        path: `/ai_bot_common/list_session_by_bot`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotCommonService:PageHistoryMsg
     *
     * @tags AiBotCommon
     * @name PageHistoryMsg
     * @summary 根据HistoryId查询历史聊天窗消息
     * @request POST:/ai_bot_common/page_history_msg
     */
    pageHistoryMsg: (param: SvcModelPageHistoryMsgReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelSessionHistoryMsgResModel;
        },
        any
      >({
        path: `/ai_bot_common/page_history_msg`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotCommonService:PageSessionHistoryMsg
     *
     * @tags AiBotCommon
     * @name PageSessionHistoryMsg
     * @summary 查询会话历史聊天窗消息
     * @request POST:/ai_bot_common/page_session_history_msg
     */
    pageSessionHistoryMsg: (
      param: SvcModelPageSessionHistoryMsgReqModel,
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelSessionHistoryMsgResModel;
        },
        any
      >({
        path: `/ai_bot_common/page_session_history_msg`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotCommonService:UpdateBotSession
     *
     * @tags AiBotCommon
     * @name UpdateBotSession
     * @summary 更新会话
     * @request POST:/ai_bot_common/update_bot_session
     */
    updateBotSession: (param: SvcModelUpdateBotSessionReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotChatSessionHistoryModel[];
        },
        any
      >({
        path: `/ai_bot_common/update_bot_session`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  aiBotNew = {
    /**
     * @description service.AiBotNewService:BotDelete
     *
     * @tags AiBotNew
     * @name BotDelete
     * @summary 助手删除
     * @request POST:/ai_bot_new/bot_delete
     */
    botDelete: (param: SvcModelBotDeleteReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/ai_bot_new/bot_delete`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotNewService:BotDetail
     *
     * @tags AiBotNew
     * @name BotDetail
     * @summary 助手详情接口(工作台-Agent助手)
     * @request POST:/ai_bot_new/bot_detail
     */
    botDetail: (param: SvcModelBotDetailReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotDetailModel;
        },
        any
      >({
        path: `/ai_bot_new/bot_detail`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotNewService:BotList
     *
     * @tags AiBotNew
     * @name BotList
     * @summary 助手列表接口(工作台-Agent助手)
     * @request POST:/ai_bot_new/bot_list
     */
    botList: (param: SvcModelBotListQueryReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotListQueryResModel;
        },
        any
      >({
        path: `/ai_bot_new/bot_list`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotNewService:BotOffline
     *
     * @tags AiBotNew
     * @name BotOffline
     * @summary 助手下线接口(工作台-Agent助手)
     * @request POST:/ai_bot_new/bot_offline
     */
    botOffline: (param: SvcModelBotPublishReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/ai_bot_new/bot_offline`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotNewService:BotPublish
     *
     * @tags AiBotNew
     * @name BotPublish
     * @summary 助手发布接口(工作台-Agent助手)
     * @request POST:/ai_bot_new/bot_publish
     */
    botPublish: (param: SvcModelBotPublishReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/ai_bot_new/bot_publish`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotNewService:BotStore
     *
     * @tags AiBotNew
     * @name BotStore
     * @summary 助手统一保存接口(工作台-Agent助手)
     * @request POST:/ai_bot_new/bot_store
     */
    botStore: (param: SvcModelBotStoreReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotDetailModel;
        },
        any
      >({
        path: `/ai_bot_new/bot_store`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiBotNewService:CategoryList
     *
     * @tags AiBotNew
     * @name CategoryList
     * @summary 助手分类列表(废弃-前移至common）
     * @request GET:/ai_bot_new/category_list
     */
    categoryList: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelCategorySimpleModel[];
        },
        any
      >({
        path: `/ai_bot_new/category_list`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  aiJob = {
    /**
     * @description service.AiJobService:JobExec
     *
     * @tags AiJob
     * @name Exec
     * @summary 定时调度回调入口
     * @request POST:/ai_job/exec
     */
    exec: (param: SvcModelAiJobReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: object;
        },
        any
      >({
        path: `/ai_job/exec`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiJobService:LogPage
     *
     * @tags AiJob
     * @name LogPage
     * @summary 定时调度日志-分页列表
     * @request POST:/ai_job/log/page
     */
    logPage: (param: SvcModelAiJobLogPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelAiJobLogPageRes;
        },
        any
      >({
        path: `/ai_job/log/page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AiJobService:Page
     *
     * @tags AiJob
     * @name Page
     * @summary 定时调度-分页列表
     * @request POST:/ai_job/page
     */
    page: (param: SvcModelAiJobPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelAiJobPageRes;
        },
        any
      >({
        path: `/ai_job/page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  auth = {
    /**
     * @description service.AuthService:Info
     *
     * @tags Auth
     * @name Info
     * @summary 获取用户登录信息
     * @request GET:/auth/info
     */
    info: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceLoginRes;
        },
        any
      >({
        path: `/auth/info`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AuthService:Login
     *
     * @tags Auth
     * @name Login
     * @summary 登录
     * @request POST:/auth/login
     */
    login: (param: ServiceLoginReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceLoginRes;
        },
        any
      >({
        path: `/auth/login`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AuthService:Logout
     *
     * @tags Auth
     * @name Logout
     * @summary 登出
     * @request GET:/auth/logout
     */
    logout: (params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/auth/logout`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AuthService:Register
     *
     * @tags Auth
     * @name Register
     * @summary 账号注册
     * @request POST:/auth/register
     */
    register: (param: ServiceRegisterReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceLoginRes;
        },
        any
      >({
        path: `/auth/register`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AuthService:InviteUser
     *
     * @tags Auth
     * @name SpaceInviteUser
     * @summary 邀请用户进工作空间
     * @request POST:/auth/space/invite_user
     */
    spaceInviteUser: (param: ServiceInviteUserReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/auth/space/invite_user`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AuthService:RemoveUser
     *
     * @tags Auth
     * @name SpaceRemoveUser
     * @summary 移除工作空间的用户
     * @request POST:/auth/space/remove_user
     */
    spaceRemoveUser: (param: ServiceUserIdReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/auth/space/remove_user`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AuthService:UserList
     *
     * @tags Auth
     * @name SpaceUserList
     * @summary 获取工作空间下的用户列表
     * @request GET:/auth/space/user_list
     */
    spaceUserList: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceSpaceUserRes[];
        },
        any
      >({
        path: `/auth/space/user_list`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AuthService:SwitchTenant
     *
     * @tags Auth
     * @name SwitchTenant
     * @summary 切换租户空间
     * @request POST:/auth/switch_tenant
     */
    switchTenant: (param: ServiceTenantIdReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/auth/switch_tenant`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AuthService:TenantInfo
     *
     * @tags Auth
     * @name TenantInfo
     * @summary 获取用户当前租户信息
     * @request GET:/auth/tenant_info
     */
    tenantInfo: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceTenantInfoRes;
        },
        any
      >({
        path: `/auth/tenant_info`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AuthService:TenantList
     *
     * @tags Auth
     * @name TenantList
     * @summary 获取用户所有的租户信息列表
     * @request GET:/auth/tenant_list
     */
    tenantList: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceTenantInfoRes[];
        },
        any
      >({
        path: `/auth/tenant_list`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AuthService:UpdateTenantConfig
     *
     * @tags Auth
     * @name UpdateTenantConfig
     * @summary 更新租户信息
     * @request POST:/auth/update_tenant_config
     */
    updateTenantConfig: (param: ServiceTenantConfigReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/auth/update_tenant_config`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.AuthService:UpdateUser
     *
     * @tags Auth
     * @name UpdateUser
     * @summary 更新用户信息
     * @request POST:/auth/update_user
     */
    updateUser: (param: ServiceUpdateUserReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/auth/update_user`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  botOnline = {
    /**
     * @description service.BotOnlineService:AddBotFavorite
     *
     * @tags BotOnline
     * @name AddBotFavorite
     * @summary 添加收藏（应用探索）
     * @request POST:/bot_online/add_bot_favorite
     */
    addBotFavorite: (param: SvcModelAddBotFavoriteReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/bot_online/add_bot_favorite`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BotOnlineService:BotFavoriteList
     *
     * @tags BotOnline
     * @name BotFavoriteList
     * @summary 我的工作区Agent列表（应用探索）
     * @request POST:/bot_online/bot_favorite_list
     */
    botFavoriteList: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotFavoriteResModel[];
        },
        any
      >({
        path: `/bot_online/bot_favorite_list`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BotOnlineService:BotMarket
     *
     * @tags BotOnline
     * @name BotMarket
     * @summary 应用市场列表接口(应用探索-助手列表)
     * @request POST:/bot_online/bot_market
     */
    botMarket: (param: SvcModelBotMarketReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotListQueryResModel;
        },
        any
      >({
        path: `/bot_online/bot_market`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BotOnlineService:BotMarketList
     *
     * @tags BotOnline
     * @name BotMarketList
     * @summary 所有发布的智能体列表接口(统计分析)
     * @request GET:/bot_online/bot_market_list
     */
    botMarketList: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotResModel[];
        },
        any
      >({
        path: `/bot_online/bot_market_list`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BotOnlineService:BotOnlineAgentDetail
     *
     * @tags BotOnline
     * @name BotOnlineAgentDetail
     * @summary 对话详情接口（应用探索-Agent助手对话界面）
     * @request POST:/bot_online/bot_online_agent_detail
     */
    botOnlineAgentDetail: (param: SvcModelBotOnlineDetailReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotOnlineSimpleDetailModel;
        },
        any
      >({
        path: `/bot_online/bot_online_agent_detail`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BotOnlineService:DeleteBotFavorite
     *
     * @tags BotOnline
     * @name DeleteBotFavorite
     * @summary 移除收藏（应用探索）
     * @request POST:/bot_online/delete_bot_favorite
     */
    deleteBotFavorite: (param: SvcModelDeleteBotFavoriteReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/bot_online/delete_bot_favorite`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  businessComponents = {
    /**
     * @description service.BusinessComponents:Add
     *
     * @tags BusinessComponents
     * @name Add
     * @summary 业务组件-新增&&编辑，若是新增，ID为0，若为编辑传入对应ID
     * @request POST:/business_components/add
     */
    add: (param: SvcModelBusinessComponentsModelReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/business_components/add`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:AddCategory
     *
     * @tags BusinessComponents
     * @name AddCategory
     * @summary 业务组件-新增业务分类
     * @request POST:/business_components/add_category
     */
    addCategory: (param: SvcModelAddBusinessComponentsCategoryReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/business_components/add_category`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:AddPlanPrompt
     *
     * @tags BusinessComponents
     * @name AddPlanPrompt
     * @summary 业务组件-业务规划Prompt新增&&编辑，若是新增，ID为0，若为编辑传入对应ID
     * @request POST:/business_components/add_plan_prompt
     */
    addPlanPrompt: (param: SvcModelBusinessPlanPromptAddRes, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/business_components/add_plan_prompt`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:CategoryList
     *
     * @tags BusinessComponents
     * @name CategoryList
     * @summary 业务组件-业务分类列表
     * @request GET:/business_components/category_list
     */
    categoryList: (
      query?: {
        /** 分类名称 */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBusinessComponentsCategoryModel[];
        },
        any
      >({
        path: `/business_components/category_list`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:CondaList
     *
     * @tags BusinessComponents
     * @name CondaList
     * @summary 业务组件-Python conda环境列表
     * @request GET:/business_components/conda_list
     */
    condaList: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: TableCondaConfig[];
        },
        any
      >({
        path: `/business_components/conda_list`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:CreatedConda
     *
     * @tags BusinessComponents
     * @name CreateConda
     * @summary 业务组件-Python新建conda环境
     * @request POST:/business_components/create_conda
     */
    createConda: (param: SvcModelCreateCondaReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/business_components/create_conda`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:DelComponents
     *
     * @tags BusinessComponents
     * @name DelComponents
     * @summary 业务组件-组件根据id删除
     * @request POST:/business_components/del_Components
     */
    delComponents: (param: SvcModelBusinessPlanPromptInfoReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/business_components/del_Components`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:DelCategory
     *
     * @tags BusinessComponents
     * @name DelCategory
     * @summary 业务组件-删除业务分类
     * @request POST:/business_components/del_category
     */
    delCategory: (param: SvcModelBusinessPlanPromptInfoReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/business_components/del_category`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:DelPlanPrompt
     *
     * @tags BusinessComponents
     * @name DelPlanPrompt
     * @summary 业务组件-业务规划Prompt根据id删除
     * @request POST:/business_components/del_plan_prompt
     */
    delPlanPrompt: (param: SvcModelBusinessPlanPromptInfoReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/business_components/del_plan_prompt`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:ExecBusinessComponents
     *
     * @tags BusinessComponents
     * @name ExecBs
     * @summary 业务组件-统一执行(内部接口)
     * @request POST:/business_components/exec_bs
     */
    execBs: (param: SvcModelExecBusinessComponentsReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: string;
        },
        any
      >({
        path: `/business_components/exec_bs`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:GetOneComponent
     *
     * @tags BusinessComponents
     * @name GetOne
     * @summary 业务组件-根据id查询组件
     * @request GET:/business_components/get_one
     */
    getOne: (
      query: {
        /** 主键id */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBusinessComponentsModel;
        },
        any
      >({
        path: `/business_components/get_one`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:GetPlanPrompt
     *
     * @tags BusinessComponents
     * @name GetPlanPrompt
     * @summary 业务组件-业务规划Prompt根据id获取详情
     * @request GET:/business_components/get_plan_prompt
     */
    getPlanPrompt: (
      query: {
        /** 主键id */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBusinessPlanPromptRes;
        },
        any
      >({
        path: `/business_components/get_plan_prompt`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:ListQuery
     *
     * @tags BusinessComponents
     * @name ListQuery
     * @summary 业务组件-查询全部组件
     * @request GET:/business_components/list_query
     */
    listQuery: (
      query?: {
        /** 业务组件名称 */
        display_name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBusinessComponentsModel[];
        },
        any
      >({
        path: `/business_components/list_query`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:PagePlanPrompt
     *
     * @tags BusinessComponents
     * @name PagePlanPrompt
     * @summary 业务组件-业务规划Prompt分页列表查询
     * @request POST:/business_components/page_plan_prompt
     */
    pagePlanPrompt: (param: SvcModelBusinessPlanPromptPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBusinessPlanPromptPageRes;
        },
        any
      >({
        path: `/business_components/page_plan_prompt`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:PageQuery
     *
     * @tags BusinessComponents
     * @name PageQuery
     * @summary 业务组件-分页查询
     * @request POST:/business_components/page_query
     */
    pageQuery: (param: SvcModelBusinessComponentsPageQueryReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBusinessComponentsPageQueryResp;
        },
        any
      >({
        path: `/business_components/page_query`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:UpdateCategory
     *
     * @tags BusinessComponents
     * @name UpdateCategory
     * @summary 业务组件-更新业务分类
     * @request POST:/business_components/update_category
     */
    updateCategory: (
      param: SvcModelUpdateBusinessComponentsCategoryReq,
      params: RequestParams = {},
    ) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/business_components/update_category`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.BusinessComponents:UpdatedConda
     *
     * @tags BusinessComponents
     * @name UpdateConda
     * @summary 业务组件-Python更新conda依赖安装
     * @request POST:/business_components/update_conda
     */
    updateConda: (param: SvcModelUpdateCondaReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/business_components/update_conda`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  chatFile = {
    /**
     * @description service.ChatFileService:FileDownload
     *
     * @tags ChatFile
     * @name ResourceCenterDownload
     * @summary 空间管理-对话文档下载（资源中心）
     * @request GET:/chat_file/resource_center/download
     */
    resourceCenterDownload: (
      query: {
        /** 文档列表中的id */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/chat_file/resource_center/download`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ChatFileService:Page
     *
     * @tags ChatFile
     * @name ResourceCenterPage
     * @summary 空间管理-对话文档分页列表（资源中心）
     * @request POST:/chat_file/resource_center/page
     */
    resourceCenterPage: (param: SvcModelChatFilePageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelChatFilePageRes;
        },
        any
      >({
        path: `/chat_file/resource_center/page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  crawler = {
    /**
     * @description service.CrawlerService:AiCrawler
     *
     * @tags Crawler
     * @name AiCrawler
     * @summary AI爬虫
     * @request POST:/crawler/ai_crawler
     */
    aiCrawler: (param: SvcModelAiCrawlerRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelAiCrawlerResponse;
        },
        any
      >({
        path: `/crawler/ai_crawler`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  feedback = {
    /**
     * @description service.FeedbackService:AddFeedback
     *
     * @tags Feedback
     * @name Add
     * @summary 添加反馈记录
     * @request POST:/feedback/add
     */
    add: (param: SvcModelAddFeedbackReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/feedback/add`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FeedbackService:Page
     *
     * @tags Feedback
     * @name Page
     * @summary 反馈记录分页列表
     * @request POST:/feedback/page
     */
    page: (param: SvcModelFeedbackPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelFeedbackPageRes;
        },
        any
      >({
        path: `/feedback/page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  fileUpload = {
    /**
     * @description service.FileUploadService:Upload
     *
     * @tags FileUpload
     * @name Upload
     * @summary 文件上传,返回图片地址，需要使用Form表单file字段上传, Content-Type:multipart/form-data
     * @request POST:/file_upload/upload
     */
    upload: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceFileRes;
        },
        any
      >({
        path: `/file_upload/upload`,
        method: 'POST',
        format: 'json',
        ...params,
      }),
  };
  flow = {
    /**
     * @description service.FlowService:FlowCsvGenerateScript
     *
     * @tags Flow
     * @name CsvGenerateScript
     * @summary 工作流数据集-CSV生成清洗脚本
     * @request POST:/flow/csv/generate_script
     */
    csvGenerateScript: (param: SvcModelCsvGenerateScriptModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: string;
        },
        any
      >({
        path: `/flow/csv/generate_script`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowService:FlowDelete
     *
     * @tags Flow
     * @name FlowDelete
     * @summary 工作流删除（Agent工作流及工作流通用）
     * @request POST:/flow/flow_delete
     */
    flowDelete: (param: SvcModelFlowMarkingCommonReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/flow/flow_delete`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowService:FlowDetail
     *
     * @tags Flow
     * @name FlowDetail
     * @summary 获取工作流详情接口
     * @request POST:/flow/flow_detail
     */
    flowDetail: (param: SvcModelFlowMarkingCommonReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelWorkflowStoreDetail;
        },
        any
      >({
        path: `/flow/flow_detail`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowService:FlowFormCancel
     *
     * @tags Flow
     * @name FlowFormCancel
     * @summary 工作流表单数据组件-取消表单
     * @request POST:/flow/flow_form_cancel
     */
    flowFormCancel: (param: SvcModelFormCancelModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/flow/flow_form_cancel`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowService:FlowFormData
     *
     * @tags Flow
     * @name FlowFormData
     * @summary 工作流表单数据组件-数据提交
     * @request POST:/flow/flow_form_data
     */
    flowFormData: (param: SvcModelFormSubmitModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/flow/flow_form_data`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowService:FlowOffline
     *
     * @tags Flow
     * @name FlowOffline
     * @summary 工作流下线接口（Agent工作流及工作流通用）
     * @request POST:/flow/flow_offline
     */
    flowOffline: (param: SvcModelFlowMarkingCommonReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/flow/flow_offline`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowService:FlowPublish
     *
     * @tags Flow
     * @name FlowPublish
     * @summary 工作流发布接口（Agent工作流及工作流通用）
     * @request POST:/flow/flow_publish
     */
    flowPublish: (param: SvcModelFlowMarkingCommonReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/flow/flow_publish`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowService:FlowStore
     *
     * @tags Flow
     * @name FlowStore
     * @summary 统一保存接口
     * @request POST:/flow/flow_store
     */
    flowStore: (param: SvcModelWorkflowStoreReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelWorkflowStoreDetail;
        },
        any
      >({
        path: `/flow/flow_store`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowService:PageFlowList
     *
     * @tags Flow
     * @name PageFlowList
     * @summary 分页获取工作流列表接口
     * @request POST:/flow/page_flow_list
     */
    pageFlowList: (param: SvcModelPageWorkflowListReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelPageWorkflowStoreDetailList;
        },
        any
      >({
        path: `/flow/page_flow_list`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowService:PageWorkflowHistory
     *
     * @tags Flow
     * @name PageWorkflowHistory
     * @summary 工作流查询历史运行记录
     * @request POST:/flow/page_workflow_history
     */
    pageWorkflowHistory: (param: SvcModelPageWorkflowHistoryReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelPageWorkflowHistoryResp;
        },
        any
      >({
        path: `/flow/page_workflow_history`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowService:TestOnlyWorkflowExecute
     *
     * @tags Flow
     * @name TestOnlyWorkflowExecute
     * @summary 测试工作流接口（仅工作流）
     * @request POST:/flow/test_only_workflow_execute
     */
    testOnlyWorkflowExecute: (
      param: SvcModelTestOnlyWorkflowExecuteReq,
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelTestOnlyWorkflowExecuteResp;
        },
        any
      >({
        path: `/flow/test_only_workflow_execute`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowService:TestSingleCellExecute
     *
     * @tags Flow
     * @name TestSingleCellExecute
     * @summary 测试工作流单节点运行
     * @request POST:/flow/test_single_cell_execute
     */
    testSingleCellExecute: (param: SvcModelTestSingleCellExecuteReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelTestSingleCellExecuteResp;
        },
        any
      >({
        path: `/flow/test_single_cell_execute`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  flowOnline = {
    /**
     * @description service.FlowOnlineService:CallWorkflow
     *
     * @tags FlowOnline
     * @name CallWorkflow
     * @summary 调用工作流执行,返回执行后的对象数据
     * @request POST:/flow_online/call_workflow
     */
    callWorkflow: (param: SvcModelCallWorkflowExecuteReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: Record<string, any>;
        },
        any
      >({
        path: `/flow_online/call_workflow`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowOnlineService:FlowOnlineDetail
     *
     * @tags FlowOnline
     * @name FlowOnlineDetail
     * @summary 获取工作流详情接口
     * @request POST:/flow_online/flow_online_detail
     */
    flowOnlineDetail: (param: SvcModelFlowMarkingCommonReqModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelWorkflowStoreDetail;
        },
        any
      >({
        path: `/flow_online/flow_online_detail`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowOnlineService:InnerCallWorkflow
     *
     * @tags FlowOnline
     * @name InnerCallWorkflow
     * @summary 服务端内部调用工作流执行,返回执行后的对象数据（非WEB使用）
     * @request POST:/flow_online/inner_call_workflow
     */
    innerCallWorkflow: (param: SvcModelCallWorkflowExecuteReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: Record<string, any>;
        },
        any
      >({
        path: `/flow_online/inner_call_workflow`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.FlowOnlineService:PageFlowList
     *
     * @tags FlowOnline
     * @name PageFlowList
     * @summary 分页获取工作流列表接口（应用探索不要用这个接口）
     * @request POST:/flow_online/page_flow_list
     */
    pageFlowList: (param: SvcModelPageWorkflowListReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelLinkCallDetailList;
        },
        any
      >({
        path: `/flow_online/page_flow_list`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  knowledge = {
    /**
     * @description service.KnowledgeService:AllDocPage
     *
     * @tags Knowledge
     * @name AllDocPage
     * @summary 文档库-分页列表
     * @request POST:/knowledge/all_doc_page
     */
    allDocPage: (param: SvcModelAllDocPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelAllDocPageResponse;
        },
        any
      >({
        path: `/knowledge/all_doc_page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:BotKbAdd
     *
     * @tags Knowledge
     * @name BotKbAdd
     * @summary 助手配置-知识库添加(弃用）
     * @request POST:/knowledge/bot_kb_add
     */
    botKbAdd: (param: SvcModelBotKbAddReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/bot_kb_add`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:BotKbDel
     *
     * @tags Knowledge
     * @name BotKbDel
     * @summary 助手配置-知识库删除（弃用）
     * @request POST:/knowledge/bot_kb_del
     */
    botKbDel: (param: SvcModelBotKbAddReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/bot_kb_del`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:BotKbList
     *
     * @tags Knowledge
     * @name BotKbList
     * @summary 助手配置-知识库列表(已添加)
     * @request POST:/knowledge/bot_kb_list
     */
    botKbList: (param: SvcModelBotKbListReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotKbInfoResponse[];
        },
        any
      >({
        path: `/knowledge/bot_kb_list`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:BotKbNoAddList
     *
     * @tags Knowledge
     * @name BotKbListNoAdd
     * @summary 助手配置-知识库列表(未添加)
     * @request POST:/knowledge/bot_kb_list/no_add
     */
    botKbListNoAdd: (param: SvcModelBotKbListReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelKbInfoResponse[];
        },
        any
      >({
        path: `/knowledge/bot_kb_list/no_add`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:BotKbQuery
     *
     * @tags Knowledge
     * @name BotKbQuery
     * @summary 助手配置-知识库检索设置查询
     * @request POST:/knowledge/bot_kb_query
     */
    botKbQuery: (param: SvcModelBotKbIdReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelBotKbRetrieveConfResponse;
        },
        any
      >({
        path: `/knowledge/bot_kb_query`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:BotKbUpdate
     *
     * @tags Knowledge
     * @name BotKbUpdate
     * @summary 助手配置-知识库检索设置更新（弃用）
     * @request POST:/knowledge/bot_kb_update
     */
    botKbUpdate: (param: SvcModelBotKbUpdateReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/bot_kb_update`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:ChunkAdd
     *
     * @tags Knowledge
     * @name ChunkAdd
     * @summary 块-新增
     * @request POST:/knowledge/chunk_add
     */
    chunkAdd: (param: SvcModelChunkAddReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/chunk_add`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:ChunkAllList
     *
     * @tags Knowledge
     * @name ChunkAllList
     * @summary 块-不分页列表（所有）
     * @request GET:/knowledge/chunk_all_list
     */
    chunkAllList: (
      query?: {
        /** 数据集文档id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelAllChunkInfoResponse[];
        },
        any
      >({
        path: `/knowledge/chunk_all_list`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:ChunkDel
     *
     * @tags Knowledge
     * @name ChunkDel
     * @summary 块-删除
     * @request POST:/knowledge/chunk_del
     */
    chunkDel: (param: SvcModelChunkDelReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/chunk_del`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:ChunkGetImage
     *
     * @tags Knowledge
     * @name ChunkGetImage
     * @summary 块-根据image_id获取图片
     * @request GET:/knowledge/chunk_get_image
     */
    chunkGetImage: (
      query: {
        /** 块图片，直接拿块列表中的image_id字段 */
        image_id: string;
        /** 知识库id */
        kb_id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/knowledge/chunk_get_image`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:ChunkList
     *
     * @tags Knowledge
     * @name ChunkList
     * @summary 块-分页列表
     * @request POST:/knowledge/chunk_list
     */
    chunkList: (param: SvcModelChunkPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelChunkPageResponse;
        },
        any
      >({
        path: `/knowledge/chunk_list`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:ChunkMerge
     *
     * @tags Knowledge
     * @name ChunkMerge
     * @summary 块-开始合并
     * @request POST:/knowledge/chunk_merge
     */
    chunkMerge: (param: SvcModelChunkMergeReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/chunk_merge`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:ChunkRetrieval
     *
     * @tags Knowledge
     * @name ChunkRetrieval
     * @summary 块-检索
     * @request POST:/knowledge/chunk_retrieval
     */
    chunkRetrieval: (param: SvcModelChunkRetrievalReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelChunkRetrievalPageResponse;
        },
        any
      >({
        path: `/knowledge/chunk_retrieval`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:ChunkUpdate
     *
     * @tags Knowledge
     * @name ChunkUpdate
     * @summary 块-更新
     * @request POST:/knowledge/chunk_update
     */
    chunkUpdate: (param: SvcModelChunkUpdateReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/chunk_update`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:PivotDirList
     *
     * @tags Knowledge
     * @name DirList
     * @summary 知识库-文件目录列表
     * @request POST:/knowledge/dir_list
     */
    dirList: (param: SvcModelKbCommonReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelPivotDirResponse[];
        },
        any
      >({
        path: `/knowledge/dir_list`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocAbstractList
     *
     * @tags Knowledge
     * @name DocAbstractList
     * @summary 知识库-摘要文档列表
     * @request POST:/knowledge/doc_abstract_list
     */
    docAbstractList: (param: SvcModelKbCommonReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelFileDocumentResponse[];
        },
        any
      >({
        path: `/knowledge/doc_abstract_list`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocChangeStatus
     *
     * @tags Knowledge
     * @name DocChangeStatus
     * @summary 数据集-改变文件启用状态
     * @request POST:/knowledge/doc_change_status
     */
    docChangeStatus: (param: SvcModelDocChangeStatusReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/doc_change_status`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocCreate
     *
     * @tags Knowledge
     * @name DocCreate
     * @summary 数据集-新建空文档
     * @request POST:/knowledge/doc_create
     */
    docCreate: (param: SvcModelDocCreateReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/doc_create`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocDel
     *
     * @tags Knowledge
     * @name DocDel
     * @summary 数据集-删除文件
     * @request POST:/knowledge/doc_del
     */
    docDel: (param: SvcModelDocDelReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/doc_del`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocDownload
     *
     * @tags Knowledge
     * @name DocDownload
     * @summary 数据集-下载文件
     * @request GET:/knowledge/doc_download
     */
    docDownload: (
      query: {
        /** id */
        id: string;
        /** 知识库id */
        kb_id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/knowledge/doc_download`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocList
     *
     * @tags Knowledge
     * @name DocList
     * @summary 数据集-查询文件分页列表
     * @request POST:/knowledge/doc_list
     */
    docList: (param: SvcModelDocListReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelDocListResponse;
        },
        any
      >({
        path: `/knowledge/doc_list`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocOriginalList
     *
     * @tags Knowledge
     * @name DocOriginalList
     * @summary 知识库-原文文档列表
     * @request POST:/knowledge/doc_original_list
     */
    docOriginalList: (param: SvcModelKbCommonReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelFileDocumentResponse[];
        },
        any
      >({
        path: `/knowledge/doc_original_list`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocParse
     *
     * @tags Knowledge
     * @name DocParse
     * @summary 数据集-解析文件
     * @request POST:/knowledge/doc_parse
     */
    docParse: (param: SvcModelDocDelReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/doc_parse`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocParseStop
     *
     * @tags Knowledge
     * @name DocParseStop
     * @summary 数据集-解析文件-停止
     * @request POST:/knowledge/doc_parse_stop
     */
    docParseStop: (param: SvcModelDocDelReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/doc_parse_stop`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocTypeList
     *
     * @tags Knowledge
     * @name DocTypeList
     * @summary 文档库-文档类型列表
     * @request GET:/knowledge/doc_type_list
     */
    docTypeList: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelDocumentTypeResponse[];
        },
        any
      >({
        path: `/knowledge/doc_type_list`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocUpdate
     *
     * @tags Knowledge
     * @name DocUpdate
     * @summary 数据集-更新文档
     * @request POST:/knowledge/doc_update
     */
    docUpdate: (param: SvcModelDocUpdateReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/doc_update`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:DocUpload
     *
     * @tags Knowledge
     * @name DocUpload
     * @summary 数据集-上传文档
     * @request POST:/knowledge/doc_upload
     */
    docUpload: (param: SvcModelDocUploadReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/doc_upload`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:KbCreate
     *
     * @tags Knowledge
     * @name KbCreate
     * @summary 知识库添加
     * @request POST:/knowledge/kb_create
     */
    kbCreate: (param: SvcModelKbCreateReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelKbCreateResponse;
        },
        any
      >({
        path: `/knowledge/kb_create`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:KbDel
     *
     * @tags Knowledge
     * @name KbDel
     * @summary 知识库删除
     * @request POST:/knowledge/kb_del
     */
    kbDel: (param: SvcModelKbIdsReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/knowledge/kb_del`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:KbInfo
     *
     * @tags Knowledge
     * @name KbInfo
     * @summary 知识库基础信息
     * @request GET:/knowledge/kb_info
     */
    kbInfo: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelKbInfoResponse;
        },
        any
      >({
        path: `/knowledge/kb_info`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:KbList
     *
     * @tags Knowledge
     * @name KbList
     * @summary 知识库分页列表
     * @request POST:/knowledge/kb_list
     */
    kbList: (param: SvcModelKbInfoReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelKbInfoListResponse;
        },
        any
      >({
        path: `/knowledge/kb_list`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:KbParserIds
     *
     * @tags Knowledge
     * @name KbParserIds
     * @summary 获取知识库解析方法
     * @request GET:/knowledge/kb_parser_ids
     */
    kbParserIds: (
      query?: {
        /** 数据集文档id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelKbParserIdResponse[];
        },
        any
      >({
        path: `/knowledge/kb_parser_ids`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.KnowledgeService:KbUpdate
     *
     * @tags Knowledge
     * @name KbUpdate
     * @summary 知识库更新
     * @request POST:/knowledge/kb_update
     */
    kbUpdate: (param: SvcModelKbUpdateReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/knowledge/kb_update`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  llm = {
    /**
     * @description service.LlmService:AsrLlms
     *
     * @tags Llm
     * @name AsrLlms
     * @summary 获取可用的音频文件转换文本模型
     * @request GET:/llm/asr_llms
     */
    asrLlms: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelLlmResult[];
        },
        any
      >({
        path: `/llm/asr_llms`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:EmbedingLlms
     *
     * @tags Llm
     * @name EmbeddingLlms
     * @summary 获取Embedding得大模型（知识库使用）
     * @request GET:/llm/embedding_llms
     */
    embeddingLlms: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelLlmResult[];
        },
        any
      >({
        path: `/llm/embedding_llms`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:Image2textLlms
     *
     * @tags Llm
     * @name Image2TextLlms
     * @summary 获取布局识别和OCR大模型（知识库使用）
     * @request GET:/llm/image2text_llms
     */
    image2TextLlms: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelLlmResult[];
        },
        any
      >({
        path: `/llm/image2text_llms`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:LlmAdd
     *
     * @tags Llm
     * @name LlmAdd
     * @summary 大模型新增接口（添加配置后新增租户下可用大模型）
     * @request POST:/llm/llm_add
     */
    llmAdd: (param: SvcModelLlmAddReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: string;
        },
        any
      >({
        path: `/llm/llm_add`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:LlmAllStatus
     *
     * @tags Llm
     * @name LlmAllStatus
     * @summary 全部大模型可用状态描述接口（包含向量模型） 废弃
     * @request GET:/llm/llm_all_status
     */
    llmAllStatus: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelLlmFactoriesRes[];
        },
        any
      >({
        path: `/llm/llm_all_status`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:LlmBuiltInList
     *
     * @tags Llm
     * @name LlmBuiltInList
     * @summary 内置模型-获取租户下所有的内置模型
     * @request GET:/llm/llm_built_in/list
     */
    llmBuiltInList: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelLlmBuiltInInfoRes[];
        },
        any
      >({
        path: `/llm/llm_built_in/list`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:LlmBuiltInUpdate
     *
     * @tags Llm
     * @name LlmBuiltInUpdate
     * @summary 内置模型-编辑（编辑模型和配置）
     * @request POST:/llm/llm_built_in/update
     */
    llmBuiltInUpdate: (param: SvcModelLlmBuiltInUpdateReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/llm/llm_built_in/update`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:LlmDelete
     *
     * @tags Llm
     * @name LlmDelete
     * @summary 删除具体大模型（已配置的大模型）
     * @request POST:/llm/llm_delete
     */
    llmDelete: (param: SvcModelLlmDeleteReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: string;
        },
        any
      >({
        path: `/llm/llm_delete`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:LlmEmbeddingCall
     *
     * @tags Llm
     * @name LlmEmbeddingCall
     * @summary 向量模型调用（知识库后端对接，非WEB）
     * @request POST:/llm/llm_embedding_call
     */
    llmEmbeddingCall: (param: SvcModelLlmEmbeddingRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ModelImplLlmEmbeddingResponse;
        },
        any
      >({
        path: `/llm/llm_embedding_call`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:LlmFactories
     *
     * @tags Llm
     * @name LlmFactories
     * @summary 获取全部大模型列表
     * @request GET:/llm/llm_factories
     */
    llmFactories: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelFactoriesRes[];
        },
        any
      >({
        path: `/llm/llm_factories`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:LlmFactoryDelete
     *
     * @tags Llm
     * @name LlmFactoryDelete
     * @summary 删除厂家大模型（已配置的厂家大模型）
     * @request POST:/llm/llm_factory_delete
     */
    llmFactoryDelete: (param: SvcModelLlmFactoryDeleteReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: string;
        },
        any
      >({
        path: `/llm/llm_factory_delete`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:LlmRerankCall
     *
     * @tags Llm
     * @name LlmRerankCall
     * @summary rerank量模型调用（知识库后端对接，非WEB）
     * @request POST:/llm/llm_rerank_call
     */
    llmRerankCall: (param: SvcModelLlmRerankRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ModelImplRerankResponse;
        },
        any
      >({
        path: `/llm/llm_rerank_call`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:MyAllLlms
     *
     * @tags Llm
     * @name MyAllLlms
     * @summary 获取租户下的已经配置的大模型(包含所有可用模型）
     * @request GET:/llm/my_all_llms
     */
    myAllLlms: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelLlmResult[];
        },
        any
      >({
        path: `/llm/my_all_llms`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:MyLlms
     *
     * @tags Llm
     * @name MyLlms
     * @summary 获取租户下的已经配置的大模型(不包含向量模型）
     * @request GET:/llm/my_llms
     */
    myLlms: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelLlmResult[];
        },
        any
      >({
        path: `/llm/my_llms`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:RerankLlms
     *
     * @tags Llm
     * @name RerankLlms
     * @summary 获取rerank模型（知识库使用）
     * @request GET:/llm/rerank_llms
     */
    rerankLlms: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelLlmResult[];
        },
        any
      >({
        path: `/llm/rerank_llms`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.LlmService:VideoLlms
     *
     * @tags Llm
     * @name VideoLlms
     * @summary 获取可用的视频解析转文本模型
     * @request GET:/llm/video_llms
     */
    videoLlms: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelLlmResult[];
        },
        any
      >({
        path: `/llm/video_llms`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  mcp = {
    /**
     * @description service.McpService:AddMcp
     *
     * @tags Mcp
     * @name Add
     * @summary MCP服务-创建
     * @request POST:/mcp/add
     */
    add: (param: SvcModelMcpAddReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/mcp/add`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.McpService:CallMcpTool
     *
     * @tags Mcp
     * @name CallMcpTools
     * @summary MCP服务-详情页
     * @request POST:/mcp/call_mcp_tools
     */
    callMcpTools: (param: SvcModelCallMcpToolReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelCallMcpToolRes;
        },
        any
      >({
        path: `/mcp/call_mcp_tools`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.McpService:McpInfo
     *
     * @tags Mcp
     * @name Info
     * @summary MCP服务-详情页
     * @request GET:/mcp/info
     */
    info: (
      query: {
        /** 主键ID */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelMcpInfoRes;
        },
        any
      >({
        path: `/mcp/info`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.McpService:PageMcp
     *
     * @tags Mcp
     * @name Page
     * @summary MCP服务-分页列表
     * @request POST:/mcp/page
     */
    page: (param: SvcModelMcpPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelMcpPageRes;
        },
        any
      >({
        path: `/mcp/page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.McpService:SyncMcp
     *
     * @tags Mcp
     * @name SyncMcp
     * @summary MCP服务-同步工具列表
     * @request POST:/mcp/sync_mcp
     */
    syncMcp: (param: SvcModelMcpIdReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelMcpInfoRes;
        },
        any
      >({
        path: `/mcp/sync_mcp`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.McpService:UpdateMcp
     *
     * @tags Mcp
     * @name Update
     * @summary MCP服务-编辑配置
     * @request POST:/mcp/update
     */
    update: (param: SvcModelMcpUpdateReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/mcp/update`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.McpService:UpdateMcpToolConfig
     *
     * @tags Mcp
     * @name UpdateMcpTool
     * @summary MCP服务-编辑工具配置
     * @request POST:/mcp/update_mcp_tool
     */
    updateMcpTool: (param: SvcModelUpdateMcpToolReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/mcp/update_mcp_tool`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  media = {
    /**
     * @description service.MediaService:Asr
     *
     * @tags Media
     * @name Asr
     * @summary websocket调用实时语音转文字
     * @request GET:/media/asr
     */
    asr: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceMediaWsRes;
        },
        any
      >({
        path: `/media/asr`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.MediaService:Asr
     *
     * @tags Media
     * @name Asr2
     * @summary websocket调用实时语音转文字
     * @request OPTIONS:/media/asr
     * @originalName asr
     * @duplicate
     */
    asr2: (param: ServiceMediaWsRes, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceMediaWsRes;
        },
        any
      >({
        path: `/media/asr`,
        method: 'OPTIONS',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.MediaService:AsrFileToText
     *
     * @tags Media
     * @name AsrFileToText
     * @summary Asr音频文件转文字（wav,mp3)
     * @request OPTIONS:/media/asr_file_to_text
     */
    asrFileToText: (param: ServiceAsrFileToTextReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceAsrFileToTextRes;
        },
        any
      >({
        path: `/media/asr_file_to_text`,
        method: 'OPTIONS',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.MediaService:AsrFileToText
     *
     * @tags Media
     * @name AsrFileToText2
     * @summary Asr音频文件转文字（wav,mp3)
     * @request POST:/media/asr_file_to_text
     * @originalName asrFileToText
     * @duplicate
     */
    asrFileToText2: (param: ServiceAsrFileToTextReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceAsrFileToTextRes;
        },
        any
      >({
        path: `/media/asr_file_to_text`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.MediaService:GetMediaToken
     *
     * @tags Media
     * @name GetMediaToken
     * @summary 获取Media访问token
     * @request OPTIONS:/media/get_media_token
     */
    getMediaToken: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceMediaTokenRes;
        },
        any
      >({
        path: `/media/get_media_token`,
        method: 'OPTIONS',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.MediaService:GetMediaToken
     *
     * @tags Media
     * @name GetMediaToken2
     * @summary 获取Media访问token
     * @request POST:/media/get_media_token
     * @originalName getMediaToken
     * @duplicate
     */
    getMediaToken2: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceMediaTokenRes;
        },
        any
      >({
        path: `/media/get_media_token`,
        method: 'POST',
        format: 'json',
        ...params,
      }),
  };
  meta = {
    /**
     * @description service.MetaAgentService:MetaAgentSse
     *
     * @tags Meta
     * @name MetaAgentSse
     * @summary Meta Agent
     * @request POST:/meta/meta_agent_sse
     */
    metaAgentSse: (param: SvcModelPivotAgentRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/meta/meta_agent_sse`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  pivotPerception = {
    /**
     * @description service.PivotPerceptionService:GetAllTools
     *
     * @tags PivotPerception
     * @name GetAllTools
     * @summary 获取平台所有工具（测试）
     * @request POST:/pivot_perception/get_all_tools
     */
    getAllTools: (params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/pivot_perception/get_all_tools`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.PivotPerceptionService:InitToolCache
     *
     * @tags PivotPerception
     * @name InitToolCache
     * @summary 初始化Tool缓存
     * @request POST:/pivot_perception/init_tool_cache
     */
    initToolCache: (params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/pivot_perception/init_tool_cache`,
        method: 'POST',
        format: 'json',
        ...params,
      }),
  };
  resourceCenter = {
    /**
     * @description service.ResourceCenterService:DocChatFileDownload
     *
     * @tags ResourceCenter
     * @name DocChatFileDownload
     * @summary 文档管理-对话文档下载
     * @request GET:/resource_center/doc/chat_file_download
     */
    docChatFileDownload: (
      query: {
        /** 文档列表中的id */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/resource_center/doc/chat_file_download`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:DocChatFilePage
     *
     * @tags ResourceCenter
     * @name DocChatFilePage
     * @summary 文档管理-分页列表（对话文档）
     * @request POST:/resource_center/doc/chat_file_page
     */
    docChatFilePage: (param: SvcModelChatFilePageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelChatFilePageRes;
        },
        any
      >({
        path: `/resource_center/doc/chat_file_page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:DocKbDownload
     *
     * @tags ResourceCenter
     * @name DocKbDownload
     * @summary 文档管理-知识库下载
     * @request GET:/resource_center/doc/kb_download
     */
    docKbDownload: (
      query: {
        /** 文档列表中的id */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/resource_center/doc/kb_download`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:DocKbPage
     *
     * @tags ResourceCenter
     * @name DocKbPage
     * @summary 文档管理-分页列表（知识库）
     * @request POST:/resource_center/doc/kb_page
     */
    docKbPage: (param: SvcModelAllDocPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelAllDocPageResponse;
        },
        any
      >({
        path: `/resource_center/doc/kb_page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:DocTypeList
     *
     * @tags ResourceCenter
     * @name DocTypeList
     * @summary 文档管理-文档类型列表
     * @request GET:/resource_center/doc/type_list
     */
    docTypeList: (
      query: {
        /** 文档管理类型：1.知识库；2.对话文档； */
        doc_type: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelDocumentTypeResponse[];
        },
        any
      >({
        path: `/resource_center/doc/type_list`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:JobLogPage
     *
     * @tags ResourceCenter
     * @name JobLogPage
     * @summary 调度分析查看日志-分页列表
     * @request POST:/resource_center/job/log/page
     */
    jobLogPage: (param: SvcModelAiJobLogPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelAiJobLogPageRes;
        },
        any
      >({
        path: `/resource_center/job/log/page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:JobPage
     *
     * @tags ResourceCenter
     * @name JobPage
     * @summary 调度分析-分页列表
     * @request POST:/resource_center/job/page
     */
    jobPage: (param: SvcModelAiJobPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelAiJobPageRes;
        },
        any
      >({
        path: `/resource_center/job/page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:McpAdd
     *
     * @tags ResourceCenter
     * @name McpAdd
     * @summary MCP配置及管控-创建
     * @request POST:/resource_center/mcp/add
     */
    mcpAdd: (param: SvcModelMcpAddReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/resource_center/mcp/add`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:McpInfo
     *
     * @tags ResourceCenter
     * @name McpInfo
     * @summary MCP配置及管控-详情页
     * @request GET:/resource_center/mcp/info
     */
    mcpInfo: (
      query: {
        /** 主键ID */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelMcpInfoRes;
        },
        any
      >({
        path: `/resource_center/mcp/info`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:McpListTool
     *
     * @tags ResourceCenter
     * @name McpListTool
     * @summary MCP配置及管控-获取mcp工具列表
     * @request POST:/resource_center/mcp/list_tool
     */
    mcpListTool: (param: SvcModelMcpListToolModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: object;
        },
        any
      >({
        path: `/resource_center/mcp/list_tool`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:McpPage
     *
     * @tags ResourceCenter
     * @name McpPage
     * @summary MCP配置及管控-分页列表
     * @request POST:/resource_center/mcp/page
     */
    mcpPage: (param: SvcModelMcpPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelMcpPageRes;
        },
        any
      >({
        path: `/resource_center/mcp/page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:McpUpdate
     *
     * @tags ResourceCenter
     * @name McpUpdate
     * @summary MCP配置及管控-编辑配置
     * @request POST:/resource_center/mcp/update
     */
    mcpUpdate: (param: SvcModelMcpUpdateReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/resource_center/mcp/update`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:SpaceAdd
     *
     * @tags ResourceCenter
     * @name SpaceAdd
     * @summary 空间管理-新增工作空间
     * @request POST:/resource_center/space/add
     */
    spaceAdd: (param: SvcModelResourceSpaceAddReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/resource_center/space/add`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:SpaceInfo
     *
     * @tags ResourceCenter
     * @name SpaceInfo
     * @summary 空间管理-获取空间信息
     * @request GET:/resource_center/space/info
     */
    spaceInfo: (
      query: {
        /** 空间id */
        tenant_id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelResourceSpaceTenantInfoRes;
        },
        any
      >({
        path: `/resource_center/space/info`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:SpaceList
     *
     * @tags ResourceCenter
     * @name SpaceList
     * @summary 空间管理-不分页列表
     * @request GET:/resource_center/space/list
     */
    spaceList: (
      query?: {
        /** 搜索字段 */
        keywords?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelResourceSpaceResponse[];
        },
        any
      >({
        path: `/resource_center/space/list`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:SpacePage
     *
     * @tags ResourceCenter
     * @name SpacePage
     * @summary 空间管理-分页列表
     * @request POST:/resource_center/space/page
     */
    spacePage: (param: SvcModelResourceSpacePageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelResourceSpacePageRes;
        },
        any
      >({
        path: `/resource_center/space/page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:SpaceStatistic
     *
     * @tags ResourceCenter
     * @name SpaceStatistic
     * @summary 空间管理-获取空间下的数据统计
     * @request GET:/resource_center/space/statistic
     */
    spaceStatistic: (
      query: {
        /** 空间id */
        tenant_id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelStatisticNameSpaceAgentResModel;
        },
        any
      >({
        path: `/resource_center/space/statistic`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:SpaceUpdate
     *
     * @tags ResourceCenter
     * @name SpaceUpdate
     * @summary 空间管理-编辑工作空间
     * @request POST:/resource_center/space/update
     */
    spaceUpdate: (param: SvcModelResourceSpaceUpdateReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/resource_center/space/update`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ResourceCenterService:SpaceUserList
     *
     * @tags ResourceCenter
     * @name SpaceUserList
     * @summary 空间管理-获取空间下的用户列表
     * @request GET:/resource_center/space/user_list
     */
    spaceUserList: (
      query: {
        /** 空间id */
        tenant_id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelResourceSpaceUserRes[];
        },
        any
      >({
        path: `/resource_center/space/user_list`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  script = {
    /**
     * @description service.ScriptService:PyCreateCondaEnv
     *
     * @tags Script
     * @name PyCreateCondaEnv
     * @summary conda环境-新增
     * @request POST:/script/py/create_conda_env
     */
    pyCreateCondaEnv: (param: SvcModelCreateCondaEnvReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: string;
        },
        any
      >({
        path: `/script/py/create_conda_env`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ScriptService:PyDelCondaEnv
     *
     * @tags Script
     * @name PyDelCondaEnv
     * @summary conda环境-删除
     * @request POST:/script/py/del_conda_env
     */
    pyDelCondaEnv: (param: SvcModelCondaEnvReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/script/py/del_conda_env`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ScriptService:PyListCondaEnvs
     *
     * @tags Script
     * @name PyListCondaEnvs
     * @summary conda环境-列表
     * @request GET:/script/py/list_conda_envs
     */
    pyListCondaEnvs: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelCondaEnvResponse[];
        },
        any
      >({
        path: `/script/py/list_conda_envs`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ScriptService:PyUpdateCondaEnv
     *
     * @tags Script
     * @name PyUpdateCondaEnv
     * @summary conda环境-编辑
     * @request POST:/script/py/update_conda_env
     */
    pyUpdateCondaEnv: (param: SvcModelUpdateCondaEnvReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: string;
        },
        any
      >({
        path: `/script/py/update_conda_env`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  statistic = {
    /**
     * @description service.StatisticService:GetSourceType
     *
     * @tags Statistic
     * @name GetSourceType
     * @summary 获取场景类型
     * @request GET:/statistic/get_source_type
     */
    getSourceType: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelSourceTypeResModel[];
        },
        any
      >({
        path: `/statistic/get_source_type`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StatisticService:StatisticAgentAnalysis
     *
     * @tags Statistic
     * @name StatisticAgentAnalysis
     * @summary 获取智能体统计分析
     * @request POST:/statistic/statistic_agent_analysis
     */
    statisticAgentAnalysis: (
      param: SvcModelStatisticAgentCommonModel,
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelStatisticAgentResModel;
        },
        any
      >({
        path: `/statistic/statistic_agent_analysis`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StatisticService:StatisticNameSpaceAgent
     *
     * @tags Statistic
     * @name StatisticNameSpaceAgent
     * @summary 获取空间助手数据统计
     * @request GET:/statistic/statistic_name_space_agent
     */
    statisticNameSpaceAgent: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelStatisticNameSpaceAgentResModel;
        },
        any
      >({
        path: `/statistic/statistic_name_space_agent`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  stream = {
    /**
     * @description service.StreamService:BotPromptGen
     *
     * @tags Stream
     * @name BotPromptGen
     * @summary 助手提示词优化(工作台-生成提示词)
     * @request POST:/stream/bot_prompt_gen
     */
    botPromptGen: (param: SvcModelBotPromptGenReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/bot_prompt_gen`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:ChatMessage
     *
     * @tags Stream
     * @name ChatMessage
     * @summary 助手聊天消息（单一Post方式）
     * @request OPTIONS:/stream/chat_message
     */
    chatMessage: (param: SvcModelChatMessageModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/chat_message`,
        method: 'OPTIONS',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:ChatMessage
     *
     * @tags Stream
     * @name ChatMessage2
     * @summary 助手聊天消息（单一Post方式）
     * @request POST:/stream/chat_message
     * @originalName chatMessage
     * @duplicate
     */
    chatMessage2: (param: SvcModelChatMessageModel, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/chat_message`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:LlmEmbedding
     *
     * @tags Stream
     * @name LlmEmbedding
     * @summary 大模型embedding向量化
     * @request OPTIONS:/stream/llm_embedding
     */
    llmEmbedding: (param: ServiceEmbedLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/llm_embedding`,
        method: 'OPTIONS',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:LlmEmbedding
     *
     * @tags Stream
     * @name LlmEmbedding2
     * @summary 大模型embedding向量化
     * @request POST:/stream/llm_embedding
     * @originalName llmEmbedding
     * @duplicate
     */
    llmEmbedding2: (param: ServiceEmbedLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/llm_embedding`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:LlmRerank
     *
     * @tags Stream
     * @name LlmRerank
     * @summary 大模型rerank重排
     * @request OPTIONS:/stream/llm_rerank
     */
    llmRerank: (param: ServiceRerankLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/llm_rerank`,
        method: 'OPTIONS',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:LlmRerank
     *
     * @tags Stream
     * @name LlmRerank2
     * @summary 大模型rerank重排
     * @request POST:/stream/llm_rerank
     * @originalName llmRerank
     * @duplicate
     */
    llmRerank2: (param: ServiceRerankLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/llm_rerank`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:SimpleLlm
     *
     * @tags Stream
     * @name SimpleLlm
     * @summary 简单调用大模型，一次性返回内容
     * @request OPTIONS:/stream/simple_llm
     */
    simpleLlm: (param: ServiceTestLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceSimpleLlmResponse;
        },
        any
      >({
        path: `/stream/simple_llm`,
        method: 'OPTIONS',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:SimpleLlm
     *
     * @tags Stream
     * @name SimpleLlm2
     * @summary 简单调用大模型，一次性返回内容
     * @request POST:/stream/simple_llm
     * @originalName simpleLlm
     * @duplicate
     */
    simpleLlm2: (param: ServiceTestLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceSimpleLlmResponse;
        },
        any
      >({
        path: `/stream/simple_llm`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:SimpleLlmSse
     *
     * @tags Stream
     * @name SimpleLlmSse
     * @summary 简单调用大模型，流式输出
     * @request OPTIONS:/stream/simple_llm_sse
     */
    simpleLlmSse: (param: ServiceSseLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/simple_llm_sse`,
        method: 'OPTIONS',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:SimpleLlmSse
     *
     * @tags Stream
     * @name SimpleLlmSse2
     * @summary 简单调用大模型，流式输出
     * @request POST:/stream/simple_llm_sse
     * @originalName simpleLlmSse
     * @duplicate
     */
    simpleLlmSse2: (param: ServiceSseLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/simple_llm_sse`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:SseReconnect
     *
     * @tags Stream
     * @name SseReconnect
     * @summary Sse消息断开重连
     * @request OPTIONS:/stream/sse_reconnect
     */
    sseReconnect: (param: ServiceSseReconnectRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/sse_reconnect`,
        method: 'OPTIONS',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:SseReconnect
     *
     * @tags Stream
     * @name SseReconnect2
     * @summary Sse消息断开重连
     * @request POST:/stream/sse_reconnect
     * @originalName sseReconnect
     * @duplicate
     */
    sseReconnect2: (param: ServiceSseReconnectRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/sse_reconnect`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:TestLlm
     *
     * @tags Stream
     * @name TestLlm
     * @summary 测试大模型基础
     * @request OPTIONS:/stream/test_llm
     */
    testLlm: (param: ServiceTestLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/test_llm`,
        method: 'OPTIONS',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:TestLlm
     *
     * @tags Stream
     * @name TestLlm2
     * @summary 测试大模型基础
     * @request POST:/stream/test_llm
     * @originalName testLlm
     * @duplicate
     */
    testLlm2: (param: ServiceTestLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/test_llm`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:TestSseNewMessage
     *
     * @tags Stream
     * @name TestSseNew
     * @summary 测试新的Sse消息类型
     * @request OPTIONS:/stream/test_sse_new
     */
    testSseNew: (param: ServiceSseLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/test_sse_new`,
        method: 'OPTIONS',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.StreamService:TestSseNewMessage
     *
     * @tags Stream
     * @name TestSseNew2
     * @summary 测试新的Sse消息类型
     * @request POST:/stream/test_sse_new
     * @originalName testSseNew
     * @duplicate
     */
    testSseNew2: (param: ServiceSseLlmRequest, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcAiChatRes;
        },
        any
      >({
        path: `/stream/test_sse_new`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  tagLibrary = {
    /**
     * @description service.TagLibraryService:AddTagLibrary
     *
     * @tags TagLibrary
     * @name Add
     * @summary 创建标签库
     * @request POST:/tag_library/add
     */
    add: (param: SvcModelAddTagLibraryReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/tag_library/add`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:DelTagLibrary
     *
     * @tags TagLibrary
     * @name Del
     * @summary 删除标签库
     * @request POST:/tag_library/del
     */
    del: (param: SvcModelTagLibraryIdReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/tag_library/del`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:GetTagLibrary
     *
     * @tags TagLibrary
     * @name GetOne
     * @summary 根据id获取标签库
     * @request GET:/tag_library/get_one
     */
    getOne: (
      query: {
        /** 主键ID */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelTagLibraryResponse;
        },
        any
      >({
        path: `/tag_library/get_one`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:AddTagLibraryInfo
     *
     * @tags TagLibrary
     * @name InfoAdd
     * @summary 创建标签库详情
     * @request POST:/tag_library/info/add
     */
    infoAdd: (param: SvcModelAddTagLibraryInfoReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/tag_library/info/add`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:DelTagLibraryInfo
     *
     * @tags TagLibrary
     * @name InfoDel
     * @summary 删除标签库详情
     * @request POST:/tag_library/info/del
     */
    infoDel: (param: SvcModelTagLibraryIdReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/tag_library/info/del`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:DownTemplate
     *
     * @tags TagLibrary
     * @name InfoDownTemplate
     * @summary 下载标签库详情导入模板
     * @request GET:/tag_library/info/down_template
     */
    infoDownTemplate: (params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/tag_library/info/down_template`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:EnumList
     *
     * @tags TagLibrary
     * @name InfoEnumList
     * @summary 获取标签库详情枚举值列表
     * @request GET:/tag_library/info/enum_list
     */
    infoEnumList: (
      query: {
        /** 标签库管理ID，tag_library.id */
        tag_library_id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: string[];
        },
        any
      >({
        path: `/tag_library/info/enum_list`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:GetTagLibraryInfo
     *
     * @tags TagLibrary
     * @name InfoGetOne
     * @summary 根据id获取标签库详情
     * @request GET:/tag_library/info/get_one
     */
    infoGetOne: (
      query: {
        /** 主键ID */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelTagLibraryInfoResponse;
        },
        any
      >({
        path: `/tag_library/info/get_one`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:ImportExcel
     *
     * @tags TagLibrary
     * @name InfoImportExcel
     * @summary 导入标签库详情excel
     * @request POST:/tag_library/info/import_excel
     */
    infoImportExcel: (param: SvcModelTagLibraryInfoImportReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/tag_library/info/import_excel`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:InfoPage
     *
     * @tags TagLibrary
     * @name InfoPage
     * @summary 标签库详情分页列表
     * @request POST:/tag_library/info/page
     */
    infoPage: (param: SvcModelTagLibraryInfoPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelTagLibraryInfoPageRes;
        },
        any
      >({
        path: `/tag_library/info/page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:TypeList
     *
     * @tags TagLibrary
     * @name InfoTypeList
     * @summary 获取标签库详情标签类型列表
     * @request GET:/tag_library/info/type_list
     */
    infoTypeList: (
      query: {
        /** 标签库管理ID，tag_library.id */
        tag_library_id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: string[];
        },
        any
      >({
        path: `/tag_library/info/type_list`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:UpdateTagLibraryInfo
     *
     * @tags TagLibrary
     * @name InfoUpdate
     * @summary 编辑标签库详情
     * @request POST:/tag_library/info/update
     */
    infoUpdate: (param: SvcModelAddTagLibraryInfoReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/tag_library/info/update`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:List
     *
     * @tags TagLibrary
     * @name List
     * @summary 标签库管理不分页列表（所有）
     * @request GET:/tag_library/list
     */
    list: (
      query?: {
        /** 搜索字段 */
        keywords?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelTagLibraryInfoRes[];
        },
        any
      >({
        path: `/tag_library/list`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:Page
     *
     * @tags TagLibrary
     * @name Page
     * @summary 标签库管理分页列表
     * @request POST:/tag_library/page
     */
    page: (param: SvcModelTagLibraryPageReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelTagLibraryPageRes;
        },
        any
      >({
        path: `/tag_library/page`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.TagLibraryService:UpdateTagLibrary
     *
     * @tags TagLibrary
     * @name Update
     * @summary 编辑标签库
     * @request POST:/tag_library/update
     */
    update: (param: SvcModelAddTagLibraryReq, params: RequestParams = {}) =>
      this.request<SwagenDefaultRetStruct, any>({
        path: `/tag_library/update`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  tools = {
    /**
     * @description service.ToolsService:DeleteToolsInstanceConfig
     *
     * @tags Tools
     * @name DeleteToolsInstanceConfig
     * @summary 删除工具组件的实例配置
     * @request POST:/tools/delete_tools_instance_config
     */
    deleteToolsInstanceConfig: (param: ServiceToolsInstanceCommonReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/tools/delete_tools_instance_config`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ToolsService:GetSwaggerJSON
     *
     * @tags Tools
     * @name GetSwaggerJson
     * @request GET:/tools/getSwaggerJson
     */
    getSwaggerJson: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceSwaggerRes;
        },
        any
      >({
        path: `/tools/getSwaggerJson`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ToolsService:GetAgentTools
     *
     * @tags Tools
     * @name GetAgentTools
     * @summary 助手获取所有可用工具定义
     * @request GET:/tools/get_agent_tools
     */
    getAgentTools: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelToolsCommonDesc[];
        },
        any
      >({
        path: `/tools/get_agent_tools`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ToolsService:GetWorkflowTools
     *
     * @tags Tools
     * @name GetWorkflowTools
     * @summary 助手获取所有可用工具定义
     * @request GET:/tools/get_workflow_tools
     */
    getWorkflowTools: (
      query?: {
        /** 插件名称，示例：ExeSQL */
        plugin_name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelToolsCommonDesc[];
        },
        any
      >({
        path: `/tools/get_workflow_tools`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ToolsService:ListToolsInstanceConfig
     *
     * @tags Tools
     * @name ListToolsInstanceConfig
     * @summary 列出工具组件的实例配置
     * @request POST:/tools/list_tools_instance_config
     */
    listToolsInstanceConfig: (param: ServiceToolsInstanceListReq, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: SvcModelPluginInstanceResponse[];
        },
        any
      >({
        path: `/tools/list_tools_instance_config`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ToolsService:ModifyToolsInstanceConfig
     *
     * @tags Tools
     * @name ModifyToolsInstanceConfig
     * @summary 修改工具组件的实例配置
     * @request POST:/tools/modify_tools_instance_config
     */
    modifyToolsInstanceConfig: (
      param: SvcModelModifyPluginInstanceParam,
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/tools/modify_tools_instance_config`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ToolsService:SaveToolsInstanceConfig
     *
     * @tags Tools
     * @name SaveToolsInstanceConfig
     * @summary 保存工具组件的实例配置，传递的是工具中auth_instance的json结构数据进行存储
     * @request POST:/tools/save_tools_instance_config
     */
    saveToolsInstanceConfig: (param: SvcModelPluginInstanceParam, params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: boolean;
        },
        any
      >({
        path: `/tools/save_tools_instance_config`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ToolsService:ToolsCall
     *
     * @tags Tools
     * @name ToolsCallComponentName
     * @summary 工具统一调用入口（大模型Function Call，非WEB端使用）
     * @request POST:/tools/tools_call/:component_name
     */
    toolsCallComponentName: (
      componentName: string,
      param: ServiceMediaWsRes,
      params: RequestParams = {},
    ) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceObjectResp;
        },
        any
      >({
        path: `/tools/tools_call/${componentName}`,
        method: 'POST',
        body: param,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  toolsSync = {
    /**
     * @description service.ToolsSyncService:SyncToAgentTools
     *
     * @tags ToolsSync
     * @name SyncTools
     * @request GET:/tools_sync/sync_tools
     */
    syncTools: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: object;
        },
        any
      >({
        path: `/tools_sync/sync_tools`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description service.ToolsSyncService:TestPageSearch
     *
     * @tags ToolsSync
     * @name TestPageSearch
     * @request GET:/tools_sync/test_page_search
     */
    testPageSearch: (params: RequestParams = {}) =>
      this.request<
        SwagenDefaultRetStruct & {
          data?: ServiceTestPageSearchRes;
        },
        any
      >({
        path: `/tools_sync/test_page_search`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
}
