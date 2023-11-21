// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { type WordEntity } from '../../models/';
import { createWordEntityFromDiscriminatorValue } from '../../models/wordEntity';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';
import { type Guid } from 'guid-typescript';

export interface IdAccountRequestBuilderGetQueryParameters {
    accountId?: Guid;
}
export interface IdAccountRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: IdAccountRequestBuilderGetQueryParameters;
}
/**
 * Builds and executes requests for operations under /wordentity/id-account
 */
export class IdAccountRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new IdAccountRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/wordentity/id-account{?accountId*}");
    };
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WordEntity
     */
    public get(requestConfiguration?: IdAccountRequestBuilderGetRequestConfiguration | undefined) : Promise<WordEntity[] | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendCollectionAsync<WordEntity>(requestInfo, createWordEntityFromDiscriminatorValue, undefined);
    };
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdAccountRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.tryAddRequestHeaders("Accept", "text/plain;q=0");
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a idAccountRequestBuilder
     */
    public withUrl(rawUrl: string) : IdAccountRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new IdAccountRequestBuilder(rawUrl, this.requestAdapter);
    };
}
// tslint:enable
// eslint-enable