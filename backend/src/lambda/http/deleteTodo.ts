import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // @ts-ignore
    const todoId = event.pathParameters.todoId

    // TODO: Remove a TODO item by id
    return undefined
  }
//)
