import React, { memo } from "react";
import LoadingView from "shared/components/Loading/LoadingView";
import type { ILoading } from "shared/components/Loading/types";

const Loading: React.FC<ILoading> = props => <LoadingView {...props} />;

export default memo(Loading);
