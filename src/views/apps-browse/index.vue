<template>
    <div class="browse-list">
        <modal
            :draggable="true"
            :adaptive="true"
            :scrollable="true"
            name="add-custom-filter"
            height="auto">
            <add-custom-filters-modal mode="form" />
        </modal>
        <h4 class="section-title p-l-10">Apps list</h4>
        <div class="card">
            <div class="card-block">
                <div class="browse-filters">
                    <div class="dropdown bulk-actions">
                        <button
                            id="bulk-actions"
                            class="btn btn-info dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Bulk actions
                        </button>
                        <div class="dropdown-menu" aria-labelledby="bulk-actions">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <button class="add-record-btn btn btn-primary">
                        <i class="fa fa-plus-circle"/> Add App
                    </button>
                    <div class="input-group search-bar">
                        <input type="text" class="form-control">
                        <div class="input-group-append">
                            <button class="btn btn-primary">
                                <i class="fa fa-search"/> Search
                            </button>
                        </div>
                    </div>
                    <div class="browse-list-filters d-flex align-items-center">
                        <span class="mr-3">Filters</span>
                        <!-- <select id="multi" class="full-width" data-init-plugin="select2" multiple>
                            <option value="1">Filter 1</option>
                            <option value="2">Filter 2</option>
                            <option value="3">Filter 3</option>
                            <option class="add-custom-filter" @click.stop="addCustomFilter">Add custom filter</option>
                        </select> -->
                        <multiselect
                            v-model="currentFilters"
                            :multiple="true"
                            :show-labels="false"
                            :options="['Filter 1', 'Filter 2', 'Fiilter 3']"
                        >
                            <template slot="afterList" >
                                <div class="add-custom-filter-btn option__desc"><a class="option__title" @click="showAddCustomFilter">
                                <i class="fa fa-plus"/> Add custom Filter</a>
                                </div>
                            </template>
                        </multiselect>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-block">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <!-- NOTE * : Inline Style Width For Table Cell is Required as it may differ from user to user
                                                Comman Practice Followed
                                                -->
                                <th style="width:1%" class="text-center">
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </th>
                                <th>Logo</th>
                                <th>App</th>
                                <th>Lorem</th>
                                <th>Lorem</th>
                                <th style="width: 200px">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </td>
                                <td>
                                    <img src="https://mctekk.com/images/logo-o.svg" height="25px">
                                </td>
                                <td>MCTEKK CRM</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>
                                    <div class="btn-group app-edit-btn">
                                        <button type="button" class="btn btn-secondary"><i class="fas fa-pencil-alt"/> Edit</button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action 1</a>
                                            <a class="dropdown-item" href="#">Action 2</a>
                                            <a class="dropdown-item" href="#">Action 3</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-danger m-l-5"><i class="fas fa-trash-alt"/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </td>
                                <td>
                                    <img src="https://mctekk.com/images/logo-o.svg" height="25px">
                                </td>
                                <td>MCTEKK CRM</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>
                                    <div class="btn-group app-edit-btn">
                                        <button type="button" class="btn btn-secondary"><i class="fas fa-pencil-alt"/> Edit</button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action 1</a>
                                            <a class="dropdown-item" href="#">Action 2</a>
                                            <a class="dropdown-item" href="#">Action 3</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-danger m-l-5"><i class="fas fa-trash-alt"/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </td>
                                <td>
                                    <img src="https://mctekk.com/images/logo-o.svg" height="25px">
                                </td>
                                <td>MCTEKK CRM</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>
                                    <div class="btn-group app-edit-btn">
                                        <button type="button" class="btn btn-secondary"><i class="fas fa-pencil-alt"/> Edit</button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action 1</a>
                                            <a class="dropdown-item" href="#">Action 2</a>
                                            <a class="dropdown-item" href="#">Action 3</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-danger m-l-5"><i class="fas fa-trash-alt"/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </td>
                                <td>
                                    <img src="https://mctekk.com/images/logo-o.svg" height="25px">
                                </td>
                                <td>MCTEKK CRM</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>
                                    <div class="btn-group app-edit-btn">
                                        <button type="button" class="btn btn-secondary"><i class="fas fa-pencil-alt"/> Edit</button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action 1</a>
                                            <a class="dropdown-item" href="#">Action 2</a>
                                            <a class="dropdown-item" href="#">Action 3</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-danger m-l-5"><i class="fas fa-trash-alt"/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </td>
                                <td>
                                    <img src="https://mctekk.com/images/logo-o.svg" height="25px">
                                </td>
                                <td>MCTEKK CRM</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>
                                    <div class="btn-group app-edit-btn">
                                        <button type="button" class="btn btn-secondary"><i class="fas fa-pencil-alt"/> Edit</button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action 1</a>
                                            <a class="dropdown-item" href="#">Action 2</a>
                                            <a class="dropdown-item" href="#">Action 3</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-danger m-l-5"><i class="fas fa-trash-alt"/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </td>
                                <td>
                                    <img src="https://mctekk.com/images/logo-o.svg" height="25px">
                                </td>
                                <td>MCTEKK CRM</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>
                                    <div class="btn-group app-edit-btn">
                                        <button type="button" class="btn btn-secondary"><i class="fas fa-pencil-alt"/> Edit</button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action 1</a>
                                            <a class="dropdown-item" href="#">Action 2</a>
                                            <a class="dropdown-item" href="#">Action 3</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-danger m-l-5"><i class="fas fa-trash-alt"/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </td>
                                <td>
                                    <img src="https://mctekk.com/images/logo-o.svg" height="25px">
                                </td>
                                <td>MCTEKK CRM</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>
                                    <div class="btn-group app-edit-btn">
                                        <button type="button" class="btn btn-secondary"><i class="fas fa-pencil-alt"/> Edit</button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action 1</a>
                                            <a class="dropdown-item" href="#">Action 2</a>
                                            <a class="dropdown-item" href="#">Action 3</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-danger m-l-5"><i class="fas fa-trash-alt"/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </td>
                                <td>
                                    <img src="https://mctekk.com/images/logo-o.svg" height="25px">
                                </td>
                                <td>MCTEKK CRM</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>
                                    <div class="btn-group app-edit-btn">
                                        <button type="button" class="btn btn-secondary"><i class="fas fa-pencil-alt"/> Edit</button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action 1</a>
                                            <a class="dropdown-item" href="#">Action 2</a>
                                            <a class="dropdown-item" href="#">Action 3</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-danger m-l-5"><i class="fas fa-trash-alt"/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </td>
                                <td>
                                    <img src="https://mctekk.com/images/logo-o.svg" height="25px">
                                </td>
                                <td>MCTEKK CRM</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>
                                    <div class="btn-group app-edit-btn">
                                        <button type="button" class="btn btn-secondary"><i class="fas fa-pencil-alt"/> Edit</button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action 1</a>
                                            <a class="dropdown-item" href="#">Action 2</a>
                                            <a class="dropdown-item" href="#">Action 3</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-danger m-l-5"><i class="fas fa-trash-alt"/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </td>
                                <td>
                                    <img src="https://mctekk.com/images/logo-o.svg" height="25px">
                                </td>
                                <td>MCTEKK CRM</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>
                                    <div class="btn-group app-edit-btn">
                                        <button type="button" class="btn btn-secondary"><i class="fas fa-pencil-alt"/> Edit</button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action 1</a>
                                            <a class="dropdown-item" href="#">Action 2</a>
                                            <a class="dropdown-item" href="#">Action 3</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-danger m-l-5"><i class="fas fa-trash-alt"/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="checkbox text-center">
                                        <input id="checkbox1" type="checkbox" value="3">
                                        <label for="checkbox1" class="no-padding no-margin"/>
                                    </div>
                                </td>
                                <td>
                                    <img src="https://mctekk.com/images/logo-o.svg" height="25px">
                                </td>
                                <td>MCTEKK CRM</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>
                                    <div class="btn-group app-edit-btn">
                                        <button type="button" class="btn btn-secondary"><i class="fas fa-pencil-alt"/> Edit</button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action 1</a>
                                            <a class="dropdown-item" href="#">Action 2</a>
                                            <a class="dropdown-item" href="#">Action 3</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-danger m-l-5"><i class="fas fa-trash-alt"/></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import addCustomFiltersModal from "../layout/add-custom-filters-modal.vue";

export default {
    components: {
        addCustomFiltersModal
    },
    data() {
        return {
            currentFilters: []
        };
    },
    methods: {
        showAddCustomFilter() {
            this.$modal.show("add-custom-filter");
        }
    }
}
</script>


<style lang="scss">
.browse-filters {
    display: flex;
    align-items: center;
    padding: 8px;

    .bulk-actions {
        padding-left: 5px;
        padding-right: 15px;
    }

    .search-bar {
        margin-left: 25px;
        max-width: 320px;
    }

    .browse-list-filters {
        margin-left: auto;
        max-width: 450px;

        .multiselect__tags {
            min-width: 280px;
        }

        .add-custom-filter-btn {
            background-color: var(--base-color);
            color: white;
            padding: 5px;
            cursor: pointer;
        }
    }
}
.browse-list {

    table {
        table-layout: initial !important;

        thead, tbody {
            tr {
                th, td {
                    white-space: normal !important;
                    overflow: visible !important;
                    text-overflow: initial !important;
                    vertical-align: middle;
                }
            }
        }

        thead {
            background-color: white;

            tr {
                th {
                    padding-top: 0;
                    padding-bottom: 0;
                    font-weight: bold;
                    color: black;
                }
            }
        }

        tr {
            td {
            padding: 10px;

                .checkbox label:before {
                    top: 0;
                }

                p {
                    margin-bottom: 0;
                }

                .app-edit-btn {
                    .btn {
                        padding: 7px 9px;
                    }
                }
            }
        }
    }
}
</style>
