import Constant from '../Constant';

function detailEndpoint(id) {
    return `${Constant.API_DETAIL_URL}${id}`;
}

export { detailEndpoint };