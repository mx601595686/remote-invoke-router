/**
 * 转发过程中可能发生的错误
 */
export enum ErrorType {

    /**
     * 某模块重复连接
     */
    duplicateConnection,

    /**
     * 消息中发送者的名称与实际模块名称不匹配
     */
    senderNameNotCorrect,

    /**
     * 发送者发出的消息path超过了规定的长度
     */
    exceedPathMaxLength,

    /**
     * 模块发来的消息格式有问题
     */
    messageFormatError,

    /**
     * 收到未知类型的消息
     */
    messageTypeError,
}