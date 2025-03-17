
export interface apiSchema {
    getText:getText

    getLessons:getLessons
    getLessonsStatistics:getLessonsStatistics

    getLessonByName:getLessonByName
    getLessonById:getLessonById
    getLessonStatusByName: getLessonStatusByName
    getLessonStatusByid : getLessonStatusById

    postLessonStatus:postLessonStatus
    
    getTranslationForWord:getTranslationForWord
}

/**
 * @params limit:number, offset:number, 
 * modificators: {
        punctuation: boolean
        numbers: boolean
        textType: "words" | "quote" | "zen"
    }
 */

export interface getText {
    id: number,
    text: string,
}

export interface getLessons {
    lessons: lesson[]
    amount: number
}

/**
 * @params name
 */

export interface getLessonByName {
    lesson:lesson
}

/**
 * @params id
 */

export interface getLessonById {
    lesson:lesson
}

export interface getLessonsStatistics {
    successLessons: lesson[]
    amountSuccessLessons: number
    amountAllLessons: number
}

/**
 * @params id
 */

export interface getLessonStatusById {
    id: number
    name: string
    percentage?: number
    timing?: number
    status: "success" | "fail" | "notchecked"
}

/**
 * @params name
 */

export interface getLessonStatusByName {
    id: number
    name: string
    percentage?: number
    timing?: number
    status: "success" | "fail" | "notchecked"
}

export interface postLessonStatus {
    id: number
    name: string
    percentage?: number
    timing?: number
    status: "success" | "fail" | "notchecked"
}

/**
 * timing - time for text lesson
 */

//? Watch getText params(modificators)

export type lesson = {
    id: number
    name: string
    description: string
    text: getText[]
    timing?: number
    percentage: number
    language?:string
    status: "success" | "fail" | "notchecked"
}


/**
 * @params word
 * 
 * prounciation - transription of a word
 */

export interface getTranslationForWord {
    word:string
    translation: string
    pronunciation: string
    audio: AudioBuffer
}