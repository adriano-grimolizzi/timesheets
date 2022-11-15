import { mapToTableRows } from "./Table.utils"

describe('Table utils', () => {
    test('map to table rows', () => {
        const input = [[
            {
                dayOfWeek: 1,
                date: 31,
                status: 'previous'
            },
            {
                dayOfWeek: 2,
                date: 1,
                status: 'current'
            },
            {
                dayOfWeek: 3,
                date: 2,
                status: 'current'
            },
            {
                dayOfWeek: 4,
                date: 3,
                status: 'current'
            },
            {
                dayOfWeek: 5,
                date: 4,
                status: 'current'
            },
            {
                dayOfWeek: 6,
                date: 5,
                status: 'current'
            },
            {
                dayOfWeek: 7,
                date: 6,
                status: 'current'
            },
        ],
        [
            {
                dayOfWeek: 1,
                date: 7,
                status: 'current'
            },
            {
                dayOfWeek: 2,
                date: 8,
                status: 'current'
            },
            {
                dayOfWeek: 3,
                date: 9,
                status: 'current'
            },
            {
                dayOfWeek: 4,
                date: 10,
                status: 'current'
            },
            {
                dayOfWeek: 5,
                date: 11,
                status: 'current'
            },
            {
                dayOfWeek: 6,
                date: 12,
                status: 'current'
            },
            {
                dayOfWeek: 7,
                date: 13,
                status: 'current'
            },
        ],
        [
            {
                dayOfWeek: 1,
                date: 14,
                status: 'current'
            },
            {
                dayOfWeek: 2,
                date: 15,
                status: 'current'
            },
            {
                dayOfWeek: 3,
                date: 16,
                status: 'current'
            },
            {
                dayOfWeek: 4,
                date: 17,
                status: 'current'
            },
            {
                dayOfWeek: 5,
                date: 18,
                status: 'current'
            },
            {
                dayOfWeek: 6,
                date: 19,
                status: 'current'
            },
            {
                dayOfWeek: 7,
                date: 20,
                status: 'current'
            },
        ],
        [
            {
                dayOfWeek: 1,
                date: 21,
                status: 'current'
            },
            {
                dayOfWeek: 2,
                date: 22,
                status: 'current'
            },
            {
                dayOfWeek: 3,
                date: 23,
                status: 'current'
            },
            {
                dayOfWeek: 4,
                date: 24,
                status: 'current'
            },
            {
                dayOfWeek: 5,
                date: 25,
                status: 'current'
            },
            {
                dayOfWeek: 6,
                date: 26,
                status: 'current'
            },
            {
                dayOfWeek: 7,
                date: 27,
                status: 'current'
            },
        ],
        [
            {
                dayOfWeek: 1,
                date: 28,
                status: 'current'
            },
            {
                dayOfWeek: 2,
                date: 29,
                status: 'current'
            },
            {
                dayOfWeek: 3,
                date: 30,
                status: 'current'
            },
            {
                dayOfWeek: 4,
                date: 1,
                status: 'next'
            },
            {
                dayOfWeek: 5,
                date: 2,
                status: 'next'
            },
            {
                dayOfWeek: 6,
                date: 3,
                status: 'next'
            },
            {
                dayOfWeek: 7,
                date: 4,
                status: 'next'
            },
        ],
        ]

        const expected = [<tr><td>31</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>, <tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr>, <tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>, <tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr>, <tr><td>28</td><td>29</td><td>30</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>]

        expect(mapToTableRows(input).toString()).toEqual(expected.toString())
    })
})
