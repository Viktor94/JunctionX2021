export interface Answer {
  /** @format int64 */
  id?: number
  patient?: Patient
  question?: Question
  response?: boolean

  /** @format date */
  occurrenceDate?: string
}

export interface CarePlanForm {
  /** @format int64 */
  id?: number
  patient?: Patient
  answers?: Answer[]

  /** @format int32 */
  pulse?: number

  /** @format date-time */
  dateOfSubmit?: string

  /** @format int32 */
  weight?: number
  longAnswer?: string

  /** @format int32 */
  systolic?: number

  /** @format int32 */
  diastolic?: number
  bloodPressureStatus?: string
}

export interface Patient {
  /** @format int64 */
  id?: number
  email?: string
  password?: string
  fullName?: string
  phoneNumber?: string

  /** @format date */
  dateOfBirth?: string
  role?: 'PATIENT' | 'CARE_TAKER'
  careTakerList?: User[]
  carePlanFormList?: CarePlanForm[]
  primaryCareProvider?: string
  surgeon?: string
  radiationOncologist?: string
  medicalOncologist?: string
  priority?: 'LOW' | 'MEDIUM' | 'HIGH'
  relativeName?: string
  relativePhoneNumber?: string
  relativeEmail?: string
  questions?: Question[]
}

export interface Question {
  /** @format int64 */
  id?: number
  cancerType?:
    | 'BLADDER'
    | 'BREAST'
    | 'COLORECTAL'
    | 'KIDNEY'
    | 'LUNG'
    | 'LYMPHOMA'
    | 'MELANOMA'
    | 'ORAL_AND_OROPHARYNGEAL'
    | 'PANCREATIC'
    | 'PROSTATE'
    | 'THYROID'
    | 'UTERINE'
  symptomType?:
    | 'HEADACHE'
    | 'SKIN_CHANGE'
    | 'FATIGUE'
    | 'DRY_MOUTH'
    | 'DIFFICULT_SWALLOWING'
    | 'JAW_STIFFNESS'
    | 'HAIR_LOSS'
    | 'TOOTH_DECAY'
    | 'BREATH_SHORTNESS'
    | 'SHOULDER_STIFFNESS'
    | 'COUGH'
    | 'FEVER'
    | 'LOSS_OF_APETITE'
    | 'VOMITING'
    | 'BOWEL_CRAMPING'
    | 'DIARRHEA'
    | 'RECTAL_BLEEDING'
    | 'INCONTINENCE'
    | 'BLADDER_IRRITATION'
    | 'SEXUAL_PROBLEMS'
    | 'FERTILITY'
  description?: string
}

export interface User {
  /** @format int64 */
  id?: number
  email?: string
  password?: string
  fullName?: string
  phoneNumber?: string

  /** @format date */
  dateOfBirth?: string
  role?: 'PATIENT' | 'CARE_TAKER'
}

export interface RegistrationPayload {
  password?: string
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private secure?: boolean
  private format?: ResponseType

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || 'http://localhost:8080/' })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`
      )
      return formData
    }, new FormData())
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
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = (format && this.format) || void 0

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      requestParams.headers.common = { Accept: '*/*' }
      requestParams.headers.post = {}
      requestParams.headers.put = {}

      body = this.createFormData(body as Record<string, unknown>)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    })
  }
}

/**
 * @title OpenAPI definition
 * @version v0
 * @baseUrl http://localhost:8080/
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  users = {
    /**
     * No description
     *
     * @tags user-controller
     * @name AddUser
     * @request POST:/users
     */
    addUser: (data: Patient, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/users`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name GetCarePlanForm
     * @request GET:/users/{userID}
     */
    getCarePlanForm: (userId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/users/${userId}`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name GetAllPatients
     * @request GET:/users/patients
     */
    getAllPatients: (params: RequestParams = {}) =>
      this.request<Patient[], any>({
        path: `/users/patients`,
        method: 'GET',
        ...params,
      }),
  }
  carePlanForm = {
    /**
     * No description
     *
     * @tags care-plan-form-controller
     * @name SaveCarePlanForm
     * @request POST:/care-plan-form/
     */
    saveCarePlanForm: (data: CarePlanForm, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/care-plan-form/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  }
  auth = {
    /**
     * No description
     *
     * @tags authentication-controller
     * @name RegisterPatient
     * @request POST:/auth/patient/register
     */
    registerPatient: (query: { token: string }, data: RegistrationPayload, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/patient/register`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  }
  questions = {
    /**
     * No description
     *
     * @tags question-controller
     * @name GetAllQuestions
     * @request GET:/questions/
     */
    getAllQuestions: (params: RequestParams = {}) =>
      this.request<Question[], any>({
        path: `/questions/`,
        method: 'GET',
        ...params,
      }),
  }
}
