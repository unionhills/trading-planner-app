import { Trackable } from './trackable.model';

/**
 * This class represents the concept of a Trading Plan in
 * our application.  A Trading Plan allows a trader to
 * plan out a trade.
 *
 * @author Union Hills Software
 * @date   May 4, 2019
 *
 */

export enum TrendOutlook {
    Unclear,
    Up,
    Down,
    Sideways
}

export class TradingPlan implements Trackable {
    id: number;

    // For a stock, the underlying and symbol should be the same.
    // For options, the underlying would be the stock symbol
    // whilst the symbol would be the option symbol
    underlying: String;
    symbol: String;
    symbolDescription: String;
 
    marketOutlook: String;
    marketTrend: TrendOutlook;

    underlyingOutlook: String;
    underlyingTrend: TrendOutlook;

    timeFrame: String;

    plannedTradeEntryDate: Date;
    plannedTradeExitDate: Date;

    entryConditions: Array<String>;
    exitConditions: Array<String>;

    notes: String;

    createdAt: Date;
    updatedAt: Date;
}
