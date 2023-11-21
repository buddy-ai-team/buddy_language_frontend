// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { deserializeIntoAddRoleRequest, serializeAddRoleRequest, type AddRoleRequest } from '../../models/addRoleRequest';
import { createUpdateRoleResponseFromDiscriminatorValue, deserializeIntoUpdateRoleResponse, serializeUpdateRoleResponse, type UpdateRoleResponse } from '../../models/updateRoleResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AddRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Builds and executes requests for operations under /role/add
 */
export class AddRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/role/add");
    };
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UpdateRoleResponse
     */
    public post(body: AddRoleRequest, requestConfiguration?: AddRequestBuilderPostRequestConfiguration | undefined) : Promise<UpdateRoleResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter.sendAsync<UpdateRoleResponse>(requestInfo, createUpdateRoleResponseFromDiscriminatorValue, undefined);
    };
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddRoleRequest, requestConfiguration?: AddRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.tryAddRequestHeaders("Accept", "application/json;q=1, text/plain;q=0");
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAddRoleRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a addRequestBuilder
     */
    public withUrl(rawUrl: string) : AddRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AddRequestBuilder(rawUrl, this.requestAdapter);
    };
}
// tslint:enable
// eslint-enable